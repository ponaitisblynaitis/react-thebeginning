function Teachers(props){
    const teachersFirstName = props.teachers.FirstName;
    const teachersLastName = props.teachers.LastName;
    const teachersProfession = props.teachers.Profession;
    const address = props.teachers.Address;
    

    return (
        <div class="col">
                <div class="card rounded-0">
                    {/* <span class="border border-5 rounded-circle">photo</span> */}
                    <div class="card-body g-col-6">
                    <h5 class="card-title"><span class="fw-bold">{teachersFirstName}</span>{teachersLastName}</h5>
                    <p class="card-text">{teachersProfession}</p>
                    <p class="card-text">{address}</p>
                    </div>
                </div>
        </div>
    )
}

export default Teachers