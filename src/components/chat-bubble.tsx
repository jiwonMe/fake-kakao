import React from 'react'
import styled from 'styled-components'

const ChatBubble = ({ isMine = false, timestr, children }: { isMine?: boolean; timestr: string; children?: React.ReactNode }) => {
  return (
    <Layout>
      <ColumnBox>
      {!isMine && <span style={{ color: '#A3A3A3', fontSize: '13px', marginLeft: '7px', marginBottom: '4px'}}>기타치는 튜브</span>}
      <RowBox>

      {isMine && <TimeText>{timestr}</TimeText>}
      <ChatShape>
        {!isMine && < LeftChop/>}
        <Content
          color={isMine ? "#FFE403" : "#383838"}
        >
          <span style={{ color: isMine ? "#383838" : "#fff", lineHeight: 1.2 }}>
            {children}
          </span>
        </Content>
        {isMine && <RightChop/>}
      </ChatShape>
      {!isMine && <TimeText>{timestr}</TimeText>}
      </RowBox>
      </ColumnBox>
    </Layout>
  )
}

export default ChatBubble

const Layout = styled.div`
  display: flex;
`

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`
const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`

const ChatShape = styled.div`
  display: flex;
`

const Content = styled.div.attrs<{ color?: string }>((props) => ({ style: { color: props.color } }))`
  background-color: ${({ color }) => color};
  border-radius: 4px;
  padding: 7px 10px;
  font-size: 13px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`

const RightChop = () => <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6H5.19702C6.07267 6 6.52543 7.04571 5.92625 7.68426L0 14V6Z" fill="#FFE403"/>
</svg>

const LeftChop = () => <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 6H2.80298C1.92733 6 1.47457 7.04571 2.07375 7.68426L8 14V6Z" fill="#383838"/>
</svg>

const TimeText = styled.div`
  font-size: 11px;
  color: #9B9B9B;
  margin-top: 4px;
  margin-left: 8px;
  margin-right: 4px;
  /* text box sizing change */
  line-height: 1;
  font-weight: 400;
`
