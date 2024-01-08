
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Stats = () => {






    const [getcookies, setcookies] = useCookies(["acces_token", "refresh_token"])
    const[last,setlast]=useState(1)
    
    const [number, setnumber] = useState([])
    const [jerseysname, setjerseysname] = useState([])
    const navigate = useNavigate()
    const [months, setmonths] = useState([])
    const [monthsdate, setmonthsdata] = useState([])
    const [nonverified, setnoverif] = useState(0)
    const [verified, setverified] = useState(0)

    const instance = axios.create();
    const refreshToken = async () => {
        try {
            const res = await instance.post(`${process.env.REACT_APP_APIURL}/seller/refresh`, { refresh: getcookies.refresh_token });
            if (res && res.status == 200) {
                setcookies("acces_token", res.data.token)
                return instance.request(res.config);
            } else {
                navigate("/login")
            }
        }
        catch (error) {
            console.log("the error is " + error.message)
        }


    }
    const barss = async () => {
        try {
          /*  const response = await instance.get(`${process.env.REACT_APP_APIURL}/commande/numberbymonths/2023`, {
                headers: {
                    Authorization: `Bearer ${getcookies.acces_token}`,
                },
            })
            let mnt = []
            let dtt = []
            response.data.data.map(dt => {
                mnt.push(dt.month)
                dtt.push(dt.number_of_sells)

            })*/

            setmonths(["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"])
            setmonthsdata([30,55,62,13,55,100,2,0,33,33,100,52])

        }
        catch (error) {
            console.error('Error fetching sold items:', error.message);
        }
    }

    const verifiedpie = async () => {
        try {
            const response = await instance.get(`${process.env.REACT_APP_APIURL}/commande/getverifiednumber`, {
                headers: {
                    Authorization: `Bearer ${getcookies.acces_token}`,

                }
            })

            setverified(response.data.verified)
            setnoverif(response.data.noverified)



        } catch (err) {
            console.log(err)
        }
    }
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
    const jrsyssold = async (pg, lmt) => {
        try {                                                                   
           /* const response = await instance.get(`${process.env.REACT_APP_APIURL}/commande/jerseyssoldnumber?page=${pg}&limit=${lmt}`, {
                headers: {
                    Authorization: `Bearer ${getcookies.acces_token}`,

                }
            })
console.log(response.data)
       
                let arenbr = []
                let arenm = []
                for (let i = 0; i < response.data.data.length; i++) {
                    console.log("entred successfuly")
                    arenbr.push(response.data.data[i].number)
                    arenm.push(response.data.data[i].jersey.name)
                }*/
                setlast(1)
                setnumber([12,33,500,400,60,11])
                setjerseysname(["milan 2022","real madrid 2002","maroc 1998","barcelona 2011","inter 2010","man united 2007"])
          
            





        } catch (err) {
            console.log(err)
        }
    }


useEffect(() => {
    //Runs only on the first render
   /* instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response && error.response.status === 401 && !error.config._retry) {
                error.config._retry = true;
                try {
                    const token = await refreshToken();
                    error.config.headers.Authorization = `Bearer ${token}`;
                    return instance(error.config);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        }
    );*/
    barss()
    verifiedpie()
    jrsyssold(page,4)




}, [getcookies.acces_token,page]);
return (
    <div id='containercharts'>
        <div style={{ height: "70vh", width: '100%',display:"flex",justifyContent:"center"}}>

            <Line



                data={{ labels: months, datasets: [{ label: "number of sells in each month", data: monthsdate }] }}
                height={100}
                style={{width:'90%'}}




            />


        </div>
        <div style={{ height: "70vh", width: '100%',marginTop:"3%" }}>
            <Doughnut
                data={{
                    labels: [
                        'VERIFIED COMMANDES',
                        'INVERIFIED COMMANDES',

                    ],
                    datasets: [{
                        label: 'DATA',
                        data: [99, 21],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }]
                }} width={69} height={100} />
        </div>
        <div style={{ height: "70vh", width: '100%',marginTop:"2%",display:"flex",flexDirection:'column',alignItems:"center",justifyContent:"center" }}>
<Stack spacing={2}>
      <Pagination
        count={last}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
            <Bar style={{marginTop:"2%",width:"80%"}}
                data={{ labels: jerseysname, datasets: [{ label: "number of sells for each jersey", data: number }] }}
                height={100}
               




            />


        </div>

        

    </div>
);
}

export default Stats;
