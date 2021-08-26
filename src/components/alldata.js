import react, {useContext} from 'react';
import UserContext from './context';
import Card from './card';

function AllData(){

    let ctx = useContext(UserContext);
    let data = JSON.stringify(ctx);
    console.log(ctx);
    
    return (
      <div style={{marginTop: "2rem"}}>
      <h1>All Data</h1>
      <br></br>  
          <div className="card bg-light mx-auto" margin="20px auto" style={{maxWidth: "75rem"}}>
          <div class="card-body">
           <table className="table table-striped">
             <thead className="thread-dark">
               <tr>
               <th scope='col' >User</th>
               <th scope='col' >Email</th>
               <th scope='col'>Passwords</th>
               <th scope='col' >Balance ($)</th>
               </tr>
            </thead>
            <tbody>
              {ctx.users.map(function(item1,key1){
                return(
                  <tr key={key1}>
                    <td>{item1.name}</td>
                    <td>{item1.email}</td>
                    <td>{item1.password}</td>
                    <td>{item1.balance}</td>
                  </tr>
                )
              })}
            </tbody>
            </table>
            </div>
            </div>
      </div>
    );  
        }

  export default AllData;