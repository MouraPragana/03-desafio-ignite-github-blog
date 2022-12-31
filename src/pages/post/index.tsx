import { ptBR } from 'date-fns/locale'
import { useCallback, useEffect, useState } from 'react'
import { BsFillCalendar2Fill, BsFillChatFill } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { HeaderCard } from '../../components/headerCard'
import { api } from '../../lib/axios'
import { formatDateDistanceFromNow } from '../../utils/formatter'
import { BodyContent } from './styles'

interface IIssueAxiosData {
	title: string
	body: string
	html_url: string
	created_at: string
	comments: number
	user: {
		login: string
	}
}

interface IIssueState {
	issue?: IIssueAxiosData
	status: 'loading' | 'loaded' | 'error'
}

export function Post() {
	const [issueInfo, setIssueInfo] = useState<IIssueState>()

	const { issueNumber } = useParams()
	const navigate = useNavigate()

	const createdDateDistanceFromNow =
		issueInfo?.issue &&
		formatDateDistanceFromNow(issueInfo.issue.created_at, ptBR)

	const fraseDeQuantosComentarios = () => {
		return issueInfo && issueInfo.issue && issueInfo.issue.comments > 1
			? `${issueInfo.issue.comments} comentários`
			: issueInfo && issueInfo.issue && issueInfo.issue.comments === 1
			? `${issueInfo.issue.comments} comentário`
			: 'Nenhum comentário'
	}

	const fetchIssueData = useCallback(async () => {
		setIssueInfo({ status: 'loading' })
		// Aumentar tempo para buscar o retorno, mostrar o skeleton de loading.
		await new Promise((resolve) => setTimeout(resolve, 1000))
		await api
			.get<IIssueAxiosData>(
				`/repos/MouraPragana/03-desafio-ignite-github-blog/issues/${issueNumber}`,
			)
			.then((response) => {
				setIssueInfo({ issue: response.data, status: 'loaded' })
			})
			.catch(() => navigate('/'))
	}, [issueNumber, navigate])

	useEffect(() => {
		fetchIssueData()
	}, [fetchIssueData])

	return (
		<>
			<HeaderCard
				backLinkText="Voltar"
				height="168px"
				status={issueInfo?.status}
				body={issueInfo?.issue?.title}
				textLink="ver no github"
				link={issueInfo?.issue?.html_url}
				firstIcon={<ImGithub size={18} />}
				firstTextIcon={issueInfo?.issue?.user?.login}
				secondIcon={<BsFillCalendar2Fill size={18} />}
				secondTextIcon={createdDateDistanceFromNow}
				thirdIcon={<BsFillChatFill size={18} />}
				thirdTextIcon={fraseDeQuantosComentarios()}
			/>
			<BodyContent>
				{issueInfo && issueInfo.issue && issueInfo.status === 'loaded' && (
					<ReactMarkdown
						components={{
							p: ({ node, ...props }) => (
								<p
									style={{
										color: '#AFC2D4',
										fontWeight: 400,
										lineHeight: '25.6px',
										margin: '15px 0',
										textIndent: '8%',
										textAlign: 'justify',
									}}
									{...props}
								/>
							),
							img: ({ node, ...props }) => (
								<img
									{...props}
									style={{ width: '100%', marginTop: '15px' }}
									alt=""
								/>
							),
							a: ({ node, ...props }) => (
								<a
									{...props}
									style={{ color: '#3294F8', fontWeight: 'bold' }}
								/>
							),
							h3: ({ node, ...props }) => (
								<h3 {...props} style={{ color: '#E7EDF4' }} />
							),
							h2: ({ node, ...props }) => (
								<h2 {...props} style={{ color: '#E7EDF4' }} />
							),
						}}
					>
						{issueInfo.issue.body}
					</ReactMarkdown>
				)}
			</BodyContent>
		</>
	)
}
