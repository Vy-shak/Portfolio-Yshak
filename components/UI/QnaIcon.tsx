import React from 'react'
import qnaIcon from "../../public/Icons/Qna.svg"
import Image from 'next/image'
function QnaIcon() {
    return (
        <div>
            <Image alt='QnaIcon' src={qnaIcon} />
        </div>
    )
}

export default QnaIcon
