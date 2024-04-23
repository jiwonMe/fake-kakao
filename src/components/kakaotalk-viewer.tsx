'use client'
import React from 'react'
import ChatBubble from './chat-bubble'
import styled from 'styled-components'

const KakaoTalkViewer = () => {
  return (
    <Layout>
      <LeftBubbleWrapper>
        <ChatBubble timestr="오후 7:12" >안녕하세요!</ChatBubble>
      </LeftBubbleWrapper>
      <RightBubbleWrapper>
        <ChatBubble isMine timestr="오후 7:15" >안녕하세요! 반갑습니다.</ChatBubble>
      </RightBubbleWrapper>
      <LeftBubbleWrapper>
        <ChatBubble timestr="오후 7:15" >반갑습니다 ㅎㅎ</ChatBubble>
      </LeftBubbleWrapper>
    </Layout>
  )
}

export default KakaoTalkViewer

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const RightBubbleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const LeftBubbleWrapper = styled.div`
display: flex;
justify-content: flex-start;
`
