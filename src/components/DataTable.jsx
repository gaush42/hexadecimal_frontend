import { useEffect, useState} from 'react'
import axios from 'axios'

const DataTable = () => {
    const [data, setData] = useState([])

    const URL = 'http://localhost:5000/api/details'

    const getData = async()=>{
        try{
            const res = await axios.get(URL)
            const Data =  res.data
            setData(Data)
        }catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData();
    },[])

  return (
    <div className='Container'>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
            {data.map((Data) => (
              <tr key={Data.id}>
                <th scope="row">{Data.id}</th>
                <td>{Data.name}</td>
                <td>{Data.username}</td>
                <td>{Data.email}</td>
                <td>
                  {Data.address.street +
                    ", " +
                    Data.address.suite +
                    ", " +
                    Data.address.city +
                    ", " +
                    Data.address.zipcode}
                </td>
                <td>{Data.phone}</td>
                <td>{Data.website}</td>
                <td>{Data.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default DataTable