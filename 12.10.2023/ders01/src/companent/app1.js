import { useEffect, useState } from "react";




function Miray() {
const[userCount, setUserCount] = useState(0);
const[adminCount, setAdminCount] = useState(0);
const[totalUserCount, setTotalUserCount] = useState(0);
  

  useEffect(() => {
    setTotalUserCount(adminCount+userCount)
    

  }, [adminCount,userCount]);
  return (
        
    <div>
        Kullanıcı Sayısı: {userCount}
        <button  onClick={() => setUserCount(userCount + 1)}>Arttırır</button>
        
        Admin Sayısı: {adminCount}
        <button  onClick={() => setAdminCount(adminCount + 1)}>Arttırır</button>

        Tüm Kullanıcıların Sayısı:{totalUserCount}
        <button  onClick={() => setTotalUserCount(totalUserCount )}>Arttırır</button>
    </div>
  );
}
export default Miray;