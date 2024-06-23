type TComponentProrps = {
    showComponent: boolean
}
const AddItem = ({showComponent}: TComponentProrps) => {
  return (
    <div className={` ${showComponent ? 'left-0' : '-left-full'} fixed bottom-0 h-screen bg-black/50 w-full z-[100]`}>AddItem</div>
  )
}

export default AddItem