import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between m-4 border-b-4 items-center p-2 font-bold max-w-7xl mx-auto'>
            <h3 className='text-3xl'>Knowledge cafe</h3>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;