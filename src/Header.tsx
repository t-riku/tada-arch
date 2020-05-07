import React from 'react';
import { Button } from 'react-bootstrap';
function Header() {
    return(
        <div>
        <h1>多田設計建築事務所</h1>
        <a href= "">理念</a>
        <a href= "">作品</a>
        <a href= "">講演・セミナー</a>
        <a href= "">プロフィール</a>
        <a href= "">事務所概要</a>
        <a href= "">設計の流れ</a>
        <Button variant="secondary">お問い合わせフォーム</Button>
        <p>TEL:0466-42-1793</p>
        <p>E-mail:info@arttada.com</p>
        </div>
    )
}
export default Header