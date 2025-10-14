'use client'

const ShareReviewButton = () => {
    const handleClick = () => console.log('Clicou no botão!')
    return (
        <button onClick={handleClick} className='border px-3 py-1 rounded text-slate-200 text-sm'>
            Compartilhar
        </button>
    )
}

export default ShareReviewButton