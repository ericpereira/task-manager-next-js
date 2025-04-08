import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/Navbar";
import backgroundHome from '../../public/assets/home-background.jpg';

export default function Home() {
  return (
    <>
      
      <div style={{ display: 'flex', justifyContent: 'center', margin: 0, padding: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '60vw' }}>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '100px' }}>
            <div>
              <Image src={backgroundHome} alt='home background' style={{ maxHeight: '20vw', width: 'inherit' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ color: 'black' }}>Manage all your tasks in the same place. This is the easier way to manage everything in your life and business, just here, for free.</p>
            </div>
          </div>          
        </div>
      </div>
    </>
  );
}
