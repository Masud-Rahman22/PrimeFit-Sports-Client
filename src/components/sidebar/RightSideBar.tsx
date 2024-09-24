
const RightSideBar = () => {
    // const {user} = useContext(AuthContext)
    return (
        <div className=" text-white space-y-5">
            <h1 className="text-center text-2xl">Account Information</h1>
            <div className="flex justify-center items-center gap-5 bg-[#28282B] py-5">
                {/* <img src={user?.photoURL} className="rounded-full w-[60px] h-[60px]" alt="" /> */}
                <div>
                {/* <h3>{user?.displayName}</h3> */}
                {/* <h2>{user?.email}</h2> */}
                </div>
            </div>
            <h1 className="text-center text-2xl mt-20">Wishlist</h1>
        </div>
    );
};

export default RightSideBar;