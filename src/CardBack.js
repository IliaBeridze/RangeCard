import Selector from "./Selector"
import CardBackImg from "./CardBackImg"
import CardBackHeader from "./CardBackHeader"
import CardBackParagrap from "./CardBackParagrap"
export default function CardBack (){


  return (
<div className="cardback">
  <CardBackImg />
  <Selector />
  <CardBackHeader />
<CardBackParagrap />

</div>

  )


}