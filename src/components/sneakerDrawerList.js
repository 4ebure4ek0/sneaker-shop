import { observer } from "mobx-react-lite";
import SneakerDrawerCard from "./sneakerDrawerCard";

const SneakerDrawerList = observer((props) => {
    return(
        <div>
            {props.store.sneakersId.map((id) => <SneakerDrawerCard id={id} key={id + 'n'} onclick={props.store.deleteId} changeTotal={props.store.changeTotal}/>)}
        </div>
    )
})

export default SneakerDrawerList