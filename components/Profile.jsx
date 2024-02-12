import RecipeCard from "./RecipeCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='text-4xl font-bold text-center mt-6'>
        <span className='text-primary'>{name}</span>{`'s Recipes`}
      </h1>
      <p className='text-center text-lg mt-4'>{desc}</p>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((recipe) => (
          <RecipeCard
            index={recipe._id}
            recipe={recipe}
            handleEdit={() => handleEdit && handleEdit(recipe)}
            handleDelete={() => handleDelete && handleDelete(recipe)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;