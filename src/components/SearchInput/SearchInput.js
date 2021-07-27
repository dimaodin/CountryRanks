
import PageviewIcon from '@material-ui/icons/Pageview'
import styles from './SearchInput.module.css'
const SearchInput = ({...rest}) => {
    return (
        <div className={styles.wrapper}>
            <PageviewIcon color="inherit" />
            <input className={styles.input} {...rest} />
        </div>
    )
}

export default SearchInput
