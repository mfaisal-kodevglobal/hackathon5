import Image from "next/image";
import { GetMobileData } from "@/sanity/sanaity.query";
import { GetUserData } from "@/sanity/sanaity.query";
import { GetProductData } from "@/sanity/sanaity.query";

export default async function Home() {
  const mobileData = await GetMobileData();
  const userData = await GetUserData();
  const productData = await GetProductData();

  console.log('mobile Data: ', mobileData);
  console.log('user Data: ', userData);
  var mid = 0;
  var uid = 0;
  return (
    <main className="flex flex-col  justify-between px-12">
      <h1>Mobile Information</h1>
        {
          mobileData.map((mobile:any) =>(
            <div key={mid++}>
              <p className="">MobileName: {mobile.name}</p>
              {/* <p className="">MobileDescription: {mobile.description}</p>
              <p className="">MobileThumbnail: {mobile.thumbnail}</p> */}
              
            </div>
          ))
        }
        <br/><br/>
        <h1>User Information</h1>
        {
          userData.map((user:any) => (
            <div key={uid++}>
                <p className="">UserName: {user.name}</p>
                {/* <p className="">UserDescription: {user.description}</p>
                <p className="">UserThumbnail: {user.thumbnail}</p> */}
            </div>
              
          ))
        }
      
      <br/><br/>
        <h1>Product Information</h1>
        {
          productData.map((user:any) => (
            <div key={uid++}>
                <p className="">UserName: {user.name}</p>
                {/* <p className="">UserDescription: {user.description}</p>
                <p className="">UserThumbnail: {user.thumbnail}</p> */}
            </div>
          ))
        }
    </main>
  );
}
