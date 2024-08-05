
import { useState, useEffect } from 'react';
import Axios from "axios";
import styles from '@/styles/Bitswitspopup.module.css'
import { usePathname } from "next/navigation"

const Freequote = (props) => {
  const [ip, setIP] = useState('');
  const [pagenewurl, setPagenewurl] = useState('');
  const [score, setScore] = useState('Submit');

  // Creating function to load IP address from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get('https://ipwho.is/');
      setIP(res.data);
    } catch (error) {
      console.error('Error fetching IP data:', error);
    }
  };

  useEffect(() => {
    getIPData();
    setPagenewurl(window.location.href);
  }, []);

  const handleOptionChange3 = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
    }
  };

  const router = usePathname();
  const currentRoute = router;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentdate = new Date().toLocaleString();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      comment: e.target.message.value,
      pageUrl: pagenewurl,
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      currentdate: currentdate,
    };
    const JSONdata = JSON.stringify(data);
    setScore('Sending Data');

    // First API call to your server
    fetch('/api/emailapi/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }).then((res) => {
      console.log(`Response received ${res}`);
      if (res.status === 200) {
        console.log(`Response Successed ${res}`);
      }
    });

    // Second API call to SheetDB
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json"
    };
    let bodyContent = JSON.stringify({
      "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
      "Brand": "Bitswits",
      "Page": `${currentRoute}`,
      "Date": currentdate,
      "Time": currentdate,
      "JSON": JSONdata,
    });
    await fetch("https://sheetdb.io/api/v1/71sd48ae8vab6", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    // Third API call to another endpoint
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      "fields": [
        {
          "objectTypeId": "0-1",
          "name": "email",
          "value": e.target.email.value
        },
        {
          "objectTypeId": "0-1",
          "name": "name",
          "value": e.target.name.value
        },
        {
          "objectTypeId": "0-1",
          "name": "phone",
          "value": e.target.phone.value
        },
        {
          "objectTypeId": "0-1",
          "name": "message",
          "value": e.target.message.value
        }
      ],
      "context": {
        "ipAddress": ip.IPv4,
        "pageUri": pagenewurl,
        "pageName": pagenewurl
      },
      "legalConsentOptions": {
        "consent": {
          "consentToProcess": true,
          "text": "I agree to allow Example Company to store and process my personal data.",
          "communications": [
            {
              "value": true,
              "subscriptionTypeId": 999,
              "text": "I agree to receive marketing communications from Example Company."
            }
          ]
        }
      }
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    await fetch("https://api.hsforms.com/submissions/v3/integration/submit/46084502/ea92327e-cdf7-4b04-9538-8d0c0e92cd9e", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    const { pathname } = router;
    if (pathname == pathname) {
      window.location.href = '/thank-you';
    }
  }

  return (
    <>

      <div className={styles[props.formsaspire]}>
        <h4 className="t-center font30 fw500 colortextgrey font-f">Get A Free Quote</h4>

        <form className={styles.formalign} onSubmit={handleSubmit}>
          <label className={styles.label}>Full Name*</label>
          <input type="text" className={styles.formfree} required name="name" placeholder="Your name..." />

          <label className={styles.label}>Email Address*</label>
          <input type="email" className={styles.formfree} required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Type Email Address" />

          <label className={styles.label}>Phone *</label>
          <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" className={styles.formfree} required name="phone" placeholder="123-456-7890" />

          <label className={styles.label}>Message *</label>
          <textarea className={styles.formfree} required name="message" rows="2" placeholder="Type Your Message Here"></textarea>
          <button className={`bitsForm ${styles.freebtn}`} type="submit">{score} </button>
        </form>

        {props.show ?

          <div className='mt-4'>
            <a className={styles.freediscuss} href="javascript:$zopim.livechat.window.show();">LET'S DISCUSS</a>
            <a className={styles.freehomenumer} href="tel:(213) 289 3888">(213) 289 3888</a>
          </div>

          : ''}

      </div>
    </>
  )
}

export default Freequote