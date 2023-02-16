import {Link} from 'react-router-dom'
import { auth } from '../config/firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth'
export const Navbar=()=>{

    const [user]=useAuthState(auth)
    const signUserout=async ()=>{
            await signOut(auth)
    }
     return(
        <div className='navbar'>
             <div className='links'>
            <Link to='/'>home</Link>
            {!user?<Link to='/login'>login</Link>:
            <Link to='/createpost'>Create Post</Link>}
            </div>
            <div className='user'>
                {
                    user&&(
              <>  <p>{user?.displayName}</p>
                <img src={auth.currentUser?.photoURL || ""} width="20" height="20"/>
                <button onClick={signUserout}>Log Out</button></>
                )}
            </div>
        </div>
     )
}