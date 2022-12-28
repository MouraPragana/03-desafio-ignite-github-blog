import { Skeleton } from '@mui/material'
import { FaExternalLinkAlt } from 'react-icons/fa'
import {
	ProfileCard,
	SkeletonContainer,
	SocialContent,
	TextContent,
	TextContentBody,
	TextContentHeader,
	TextContentLink,
	TextContentTitle,
} from './styles'

interface IHeaderCardProps {
	imageUrl?: string
	title?: string
	textLink: string
	link?: string
	body?: string
	status: 'loaded' | 'loading' | 'error'

	firstIcon: JSX.Element
	secondIcon: JSX.Element
	thirdIcon: JSX.Element

	firstTextIcon?: string
	secondTextIcon?: string
	thirdTextIcon?: string | number
}

export function HeaderCard({
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
		<ProfileCard status={status}>
			{status === 'loading' ? (
				<SkeletonContainer>
					<Skeleton sx={{ height: '100%', width: '100%' }} />
				</SkeletonContainer>
			) : (
				<>
					<img src={imageUrl} alt="Profile pic" />

					<TextContent>
						<TextContentHeader>
							<TextContentTitle>{title}</TextContentTitle>

							<TextContentLink href={link} target="_blank" rel="noreferrer">
								{textLink} <FaExternalLinkAlt size={12} />
							</TextContentLink>
						</TextContentHeader>

						<TextContentBody>{body}</TextContentBody>

						<SocialContent>
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
