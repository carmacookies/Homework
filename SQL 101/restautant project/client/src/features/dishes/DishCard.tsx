
interface DishCardProps{
    name: String;
    price: number;
    recipe?: String;
    pic?: string;
}
export const DishCard:React.FC<DishCardProps> = ({
    name, price, recipe, pic
  }: DishCardProps) => {
  return (
    <div className="dishCard">
      <h2 className="dishName">
        {name}
      </h2>
      <h4 className="dishRecipe">{recipe}</h4>
      <img src={pic} alt="pic of dish" />  
    </div>
  );
};