import ButtonRow from "../layout/ButtonRow";
import Card from "../layout/Card";
import Statistics from "../Statistics";
import User from "../User";

function ProfilePage() { 
    return <div> 
        <Card>
            <User></User>
        </Card>

        <Card>
            <Statistics></Statistics>
        </Card>

        <Card>
        <ButtonRow> 
                <button> Log Out </button>
                <button> Edit Profile </button>
        </ButtonRow>
        </Card>
    </div>
}
    
export default ProfilePage;