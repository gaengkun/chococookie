import Link from 'next/link';
import {intro, work, about} from "../constant"
 
function MainPopupLayer(props) {

  return(
    <div>
      <button type='button'>close</button>
      <h2>{props.title}</h2>
    </div>
  )

}
 
export default MainPopupLayer;