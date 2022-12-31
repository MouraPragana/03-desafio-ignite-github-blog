import { CircularProgress } from '@mui/material'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { GoChevronLeft } from 'react-icons/go'
import {
	ProfileCard,
	SkeletonContainer,
	SocialContent,
	TextContent,
	TextContentBody,
	TextContentHeader,
	TextContentLink,
	TextContentLinkTo,
	TextContentTitle,
} from './styles'

interface IHeaderCardProps {
	backLinkText?: string
	height: string

	imageUrl?: string
	title?: string
	textLink: string
	link?: string
	body?: string
	status?: 'loaded' | 'loading' | 'error'

	firstIcon: JSX.Element
	secondIcon: JSX.Element
	thirdIcon: JSX.Element

	firstTextIcon?: string
	secondTextIcon?: string
	thirdTextIcon?: string | number
}

export function HeaderCard({
	backLinkText = '',
	height,
	imageUrl,
	title,
	textLink,
	link,
	body,
	status,
	firstIcon,
	secondIcon,
	thirdIcon,
	firstTextIcon,
	secondTextIcon,
	thirdTextIcon,
}: IHeaderCardProps) {
	return (
		<ProfileCard height={height}>
			{status === 'loading' && (
				<SkeletonContainer>
					<p>Carregando as informações</p>
					<CircularProgress />
				</SkeletonContainer>
			)}

			{status === 'loaded' && (
				<>
					{imageUrl && <img src={imageUrl} alt="Profile pic" />}
					<TextContent>
						<TextContentHeader>
							{title && <TextContentTitle>{title}</TextContentTitle>}

							{backLinkText && (
								<TextContentLinkTo to="/">
									<GoChevronLeft size={12} /> {backLinkText}
								</TextContentLinkTo>
							)}

							<TextContentLink href={link} target="_blank" rel="noreferrer">
								{textLink} <FaExternalLinkAlt size={12} />
							</TextContentLink>
						</TextContentHeader>

						{body && (
							<TextContentBody backLinkText={backLinkText}>
								{body}
							</TextContentBody>
						)}

						<SocialContent backLinkText={backLinkText}>
							<div>
								{firstIcon}
								<span>{firstTextIcon}</span>
							</div>

							<div>
								{secondIcon} <span>{secondTextIcon}</span>
							</div>

							<div>
								{thirdIcon}
								<span>{thirdTextIcon}</span>
							</div>
						</SocialContent>
					</TextContent>
				</>
			)}
		</ProfileCard>
	)
}
