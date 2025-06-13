
const page = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    console.log("User ID:", id);
    return (
        <div>
            USER Profile {id}
        </div>
    )
}

export default page;
