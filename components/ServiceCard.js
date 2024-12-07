
const ServiceCard = ({ icon, title }) => {
  return (
 
  <div className="flex transition-transform duration-300 h-full hover:scale-110 hover:brightness-75 flex-col items-center justify-center font-montserrat bg-grelish hover:bg-slate-500 p-6 rounded-lg shadow-lg">
    <div className="mb-4">{icon}</div>
    <h3 className="text-center font-semibold text-white">{title}</h3>
  </div>

  )
}

export default ServiceCard
