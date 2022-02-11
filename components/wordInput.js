import  styles from './navbar.module.css'

export default function WordInput({ submitFunction, extraInfo }){
    return (
        <>
            <form onSubmit={ submitFunction }>
                <label htmlFor='word'>Word</label>
                <span ref={ extraInfo }></span>
                <input id='word' name='word' type='text' />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}