import { TailSpin } from  'react-loader-spinner'
import sas from './Loader.module.css'

export default function Loader() {
    return (
    <div className={sas.loader}>
   
            <TailSpin
            height="90"
            width="90"
            color="#3470ff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
    </div>)
}