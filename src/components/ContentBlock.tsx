import type { ReactNode } from 'react'

import styled from 'styled-components'

interface ContentBlockProps {
  title: ReactNode
  children: ReactNode
  noPadding?: boolean
}

const ContentBlock = ({ title, children, noPadding }: ContentBlockProps) => {
  return (
    <ContentBlockContainer noPadding={noPadding}>
      <ContentTitle>{title}</ContentTitle>

      {children}
    </ContentBlockContainer>
  )
}

export default ContentBlock

const ContentBlockContainer = styled.div<Pick<ContentBlockProps, 'noPadding'>>`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.noPadding ? 0 : 12)};
`

const ContentTitle = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`
