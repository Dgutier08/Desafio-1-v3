const Card = (props)  => {
  console.log(props)
  return (
      <div className="Card flex justify-center items-center py-1 px-2 text-sm font-medium text-center text-white bg-white-700 rounded-md   ">
      <a href="#" class="rounded-t-lg mx-auto  justify-center p-1">
      <img class="font-mono hover:scale-105 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" src={props.image} alt=""/>
      <div class="flex flex-col justify-center p-4 leading-normal  bg-white">
          <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
          <p class="text-center mb-3 font-arial text-gray-800">{props.detail}</p>
      </div>
  </a>
  </div>
  );
};
export default Card;