import axios from "axios";
import React, { createRef, useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // axios.get("https://api.monobank.ua/bank/currency").then((res) => {
    //   res.data.forEach(
    //     (currency: {
    //       currencyCodeA: number;
    //       currencyCodeB: number;
    //       date: number;
    //       rateBuy: number;
    //       rateSell: number;
    //     }) => {
    //       debugger;
    //     }
    //   );
    // });
  });
  const ref = createRef();
  debugger;

  return (
    <div>
      <table ref={ref}>
        <tbody>
          <tr>
            <th data-search='1'>Entity / Location</th>
            <th data-search='1'>Currency</th>
            <th data-search='1'>Alphabetic Code</th>
            <th data-search='1'>Numeric Code</th>
            <th>Minor Unit</th>
          </tr>
          <tr>
            <td>AFGHANISTAN</td>
            <td>Afghani</td>
            <td>AFN</td>
            <td>971</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ÅLAND ISLANDS</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ALBANIA</td>
            <td>Lek</td>
            <td>ALL</td>
            <td>008</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ALGERIA</td>
            <td>Algerian Dinar</td>
            <td>DZD</td>
            <td>012</td>
            <td>2</td>
          </tr>
          <tr>
            <td>AMERICAN SAMOA</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ANDORRA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ANGOLA</td>
            <td>Kwanza</td>
            <td>AOA</td>
            <td>973</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ANGUILLA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ANTARCTICA</td>
            <td>No universal currency</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ANTIGUA AND BARBUDA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ARGENTINA</td>
            <td>Argentine Peso</td>
            <td>ARS</td>
            <td>032</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ARMENIA</td>
            <td>Armenian Dram</td>
            <td>AMD</td>
            <td>051</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ARUBA</td>
            <td>Aruban Florin</td>
            <td>AWG</td>
            <td>533</td>
            <td>2</td>
          </tr>
          <tr>
            <td>AUSTRALIA</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr>
            <td>AUSTRIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>AZERBAIJAN</td>
            <td>Azerbaijan Manat</td>
            <td>AZN</td>
            <td>944</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BAHAMAS (THE)</td>
            <td>Bahamian Dollar</td>
            <td>BSD</td>
            <td>044</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BAHRAIN</td>
            <td>Bahraini Dinar</td>
            <td>BHD</td>
            <td>048</td>
            <td>3</td>
          </tr>
          <tr>
            <td>BANGLADESH</td>
            <td>Taka</td>
            <td>BDT</td>
            <td>050</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BARBADOS</td>
            <td>Barbados Dollar</td>
            <td>BBD</td>
            <td>052</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BELARUS</td>
            <td>Belarusian Ruble</td>
            <td>BYN</td>
            <td>933</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BELGIUM</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BELIZE</td>
            <td>Belize Dollar</td>
            <td>BZD</td>
            <td>084</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BENIN</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr>
            <td>BERMUDA</td>
            <td>Bermudian Dollar</td>
            <td>BMD</td>
            <td>060</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BHUTAN</td>
            <td>Indian Rupee</td>
            <td>INR</td>
            <td>356</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BHUTAN</td>
            <td>Ngultrum</td>
            <td>BTN</td>
            <td>064</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BOLIVIA (PLURINATIONAL STATE OF)</td>
            <td>Boliviano</td>
            <td>BOB</td>
            <td>068</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BOLIVIA (PLURINATIONAL STATE OF)</td>
            <td>Mvdol</td>
            <td>BOV</td>
            <td>984</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BONAIRE, SINT EUSTATIUS AND SABA</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BOSNIA AND HERZEGOVINA</td>
            <td>Convertible Mark</td>
            <td>BAM</td>
            <td>977</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BOTSWANA</td>
            <td>Pula</td>
            <td>BWP</td>
            <td>072</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BOUVET ISLAND</td>
            <td>Norwegian Krone</td>
            <td>NOK</td>
            <td>578</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BRAZIL</td>
            <td>Brazilian Real</td>
            <td>BRL</td>
            <td>986</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BRITISH INDIAN OCEAN TERRITORY (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BRUNEI DARUSSALAM</td>
            <td>Brunei Dollar</td>
            <td>BND</td>
            <td>096</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BULGARIA</td>
            <td>Bulgarian Lev</td>
            <td>BGN</td>
            <td>975</td>
            <td>2</td>
          </tr>
          <tr>
            <td>BURKINA FASO</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr>
            <td>BURUNDI</td>
            <td>Burundi Franc</td>
            <td>BIF</td>
            <td>108</td>
            <td>0</td>
          </tr>
          <tr>
            <td>CABO VERDE</td>
            <td>Cabo Verde Escudo</td>
            <td>CVE</td>
            <td>132</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CAMBODIA</td>
            <td>Riel</td>
            <td>KHR</td>
            <td>116</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CAMEROON</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr>
            <td>CANADA</td>
            <td>Canadian Dollar</td>
            <td>CAD</td>
            <td>124</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CAYMAN ISLANDS (THE)</td>
            <td>Cayman Islands Dollar</td>
            <td>KYD</td>
            <td>136</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CENTRAL AFRICAN REPUBLIC (THE)</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr>
            <td>CHAD</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr>
            <td>CHILE</td>
            <td>Chilean Peso</td>
            <td>CLP</td>
            <td>152</td>
            <td>0</td>
          </tr>
          <tr>
            <td>CHILE</td>
            <td>Unidad de Fomento</td>
            <td>CLF</td>
            <td>990</td>
            <td>4</td>
          </tr>
          <tr>
            <td>CHINA</td>
            <td>Yuan Renminbi</td>
            <td>CNY</td>
            <td>156</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CHRISTMAS ISLAND</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr>
            <td>COCOS (KEELING) ISLANDS (THE)</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr>
            <td>COLOMBIA</td>
            <td>Colombian Peso</td>
            <td>COP</td>
            <td>170</td>
            <td>2</td>
          </tr>
          <tr>
            <td>COLOMBIA</td>
            <td>Unidad de Valor Real</td>
            <td>COU</td>
            <td>970</td>
            <td>2</td>
          </tr>
          <tr>
            <td>COMOROS (THE)</td>
            <td>Comorian Franc</td>
            <td>KMF</td>
            <td>174</td>
            <td>0</td>
          </tr>
          <tr>
            <td>CONGO (THE DEMOCRATIC REPUBLIC OF THE)</td>
            <td>Congolese Franc</td>
            <td>CDF</td>
            <td>976</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CONGO (THE)</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr>
            <td>COOK ISLANDS (THE)</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr>
            <td>COSTA RICA</td>
            <td>Costa Rican Colon</td>
            <td>CRC</td>
            <td>188</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CÔTE D'IVOIRE</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr>
            <td>CROATIA</td>
            <td>Kuna</td>
            <td>HRK</td>
            <td>191</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CUBA</td>
            <td>Cuban Peso</td>
            <td>CUP</td>
            <td>192</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CUBA</td>
            <td>Peso Convertible</td>
            <td>CUC</td>
            <td>931</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CURAÇAO</td>
            <td>Netherlands Antillean Guilder</td>
            <td>ANG</td>
            <td>532</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CYPRUS</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CZECHIA</td>
            <td>Czech Koruna</td>
            <td>CZK</td>
            <td>203</td>
            <td>2</td>
          </tr>
          <tr>
            <td>DENMARK</td>
            <td>Danish Krone</td>
            <td>DKK</td>
            <td>208</td>
            <td>2</td>
          </tr>
          <tr>
            <td>DJIBOUTI</td>
            <td>Djibouti Franc</td>
            <td>DJF</td>
            <td>262</td>
            <td>0</td>
          </tr>
          <tr>
            <td>DOMINICA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr>
            <td>DOMINICAN REPUBLIC (THE)</td>
            <td>Dominican Peso</td>
            <td>DOP</td>
            <td>214</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ECUADOR</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>EGYPT</td>
            <td>Egyptian Pound</td>
            <td>EGP</td>
            <td>818</td>
            <td>2</td>
          </tr>
          <tr>
            <td>EL SALVADOR</td>
            <td>El Salvador Colon</td>
            <td>SVC</td>
            <td>222</td>
            <td>2</td>
          </tr>
          <tr>
            <td>EL SALVADOR</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>EQUATORIAL GUINEA</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr>
            <td>ERITREA</td>
            <td>Nakfa</td>
            <td>ERN</td>
            <td>232</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ESTONIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ETHIOPIA</td>
            <td>Ethiopian Birr</td>
            <td>ETB</td>
            <td>230</td>
            <td>2</td>
          </tr>
          <tr>
            <td>EUROPEAN UNION</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>FALKLAND ISLANDS (THE) [MALVINAS]</td>
            <td>Falkland Islands Pound</td>
            <td>FKP</td>
            <td>238</td>
            <td>2</td>
          </tr>
          <tr>
            <td>FAROE ISLANDS (THE)</td>
            <td>Danish Krone</td>
            <td>DKK</td>
            <td>208</td>
            <td>2</td>
          </tr>
          <tr>
            <td>FIJI</td>
            <td>Fiji Dollar</td>
            <td>FJD</td>
            <td>242</td>
            <td>2</td>
          </tr>
          <tr>
            <td>FINLAND</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>FRANCE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>FRENCH GUIANA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>FRENCH POLYNESIA</td>
            <td>CFP Franc</td>
            <td>XPF</td>
            <td>953</td>
            <td>0</td>
          </tr>
          <tr>
            <td>FRENCH SOUTHERN TERRITORIES (THE)</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GABON</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr>
            <td>GAMBIA (THE)</td>
            <td>Dalasi</td>
            <td>GMD</td>
            <td>270</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GEORGIA</td>
            <td>Lari</td>
            <td>GEL</td>
            <td>981</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GERMANY</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GHANA</td>
            <td>Ghana Cedi</td>
            <td>GHS</td>
            <td>936</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GIBRALTAR</td>
            <td>Gibraltar Pound</td>
            <td>GIP</td>
            <td>292</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GREECE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GREENLAND</td>
            <td>Danish Krone</td>
            <td>DKK</td>
            <td>208</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GRENADA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GUADELOUPE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GUAM</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GUATEMALA</td>
            <td>Quetzal</td>
            <td>GTQ</td>
            <td>320</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GUERNSEY</td>
            <td>Pound Sterling</td>
            <td>GBP</td>
            <td>826</td>
            <td>2</td>
          </tr>
          <tr>
            <td>GUINEA</td>
            <td>Guinean Franc</td>
            <td>GNF</td>
            <td>324</td>
            <td>0</td>
          </tr>
          <tr>
            <td>GUINEA-BISSAU</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr>
            <td>GUYANA</td>
            <td>Guyana Dollar</td>
            <td>GYD</td>
            <td>328</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HAITI</td>
            <td>Gourde</td>
            <td>HTG</td>
            <td>332</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HAITI</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HEARD ISLAND AND McDONALD ISLANDS</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HOLY SEE (THE)</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HONDURAS</td>
            <td>Lempira</td>
            <td>HNL</td>
            <td>340</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HONG KONG</td>
            <td>Hong Kong Dollar</td>
            <td>HKD</td>
            <td>344</td>
            <td>2</td>
          </tr>
          <tr>
            <td>HUNGARY</td>
            <td>Forint</td>
            <td>HUF</td>
            <td>348</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ICELAND</td>
            <td>Iceland Krona</td>
            <td>ISK</td>
            <td>352</td>
            <td>0</td>
          </tr>
          <tr>
            <td>INDIA</td>
            <td>Indian Rupee</td>
            <td>INR</td>
            <td>356</td>
            <td>2</td>
          </tr>
          <tr>
            <td>INDONESIA</td>
            <td>Rupiah</td>
            <td>IDR</td>
            <td>360</td>
            <td>2</td>
          </tr>
          <tr>
            <td>INTERNATIONAL MONETARY FUND (IMF)</td>
            <td>SDR (Special Drawing Right)</td>
            <td>XDR</td>
            <td>960</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>IRAN (ISLAMIC REPUBLIC OF)</td>
            <td>Iranian Rial</td>
            <td>IRR</td>
            <td>364</td>
            <td>2</td>
          </tr>
          <tr>
            <td>IRAQ</td>
            <td>Iraqi Dinar</td>
            <td>IQD</td>
            <td>368</td>
            <td>3</td>
          </tr>
          <tr>
            <td>IRELAND</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ISLE OF MAN</td>
            <td>Pound Sterling</td>
            <td>GBP</td>
            <td>826</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ISRAEL</td>
            <td>New Israeli Sheqel</td>
            <td>ILS</td>
            <td>376</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ITALY</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>JAMAICA</td>
            <td>Jamaican Dollar</td>
            <td>JMD</td>
            <td>388</td>
            <td>2</td>
          </tr>
          <tr>
            <td>JAPAN</td>
            <td>Yen</td>
            <td>JPY</td>
            <td>392</td>
            <td>0</td>
          </tr>
          <tr>
            <td>JERSEY</td>
            <td>Pound Sterling</td>
            <td>GBP</td>
            <td>826</td>
            <td>2</td>
          </tr>
          <tr>
            <td>JORDAN</td>
            <td>Jordanian Dinar</td>
            <td>JOD</td>
            <td>400</td>
            <td>3</td>
          </tr>
          <tr>
            <td>KAZAKHSTAN</td>
            <td>Tenge</td>
            <td>KZT</td>
            <td>398</td>
            <td>2</td>
          </tr>
          <tr>
            <td>KENYA</td>
            <td>Kenyan Shilling</td>
            <td>KES</td>
            <td>404</td>
            <td>2</td>
          </tr>
          <tr>
            <td>KIRIBATI</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr>
            <td>KOREA (THE DEMOCRATIC PEOPLE'S REPUBLIC OF)</td>
            <td>North Korean Won</td>
            <td>KPW</td>
            <td>408</td>
            <td>2</td>
          </tr>
          <tr>
            <td>KOREA (THE REPUBLIC OF)</td>
            <td>Won</td>
            <td>KRW</td>
            <td>410</td>
            <td>0</td>
          </tr>
          <tr>
            <td>KUWAIT</td>
            <td>Kuwaiti Dinar</td>
            <td>KWD</td>
            <td>414</td>
            <td>3</td>
          </tr>
          <tr>
            <td>KYRGYZSTAN</td>
            <td>Som</td>
            <td>KGS</td>
            <td>417</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LAO PEOPLE'S DEMOCRATIC REPUBLIC (THE)</td>
            <td>Lao Kip</td>
            <td>LAK</td>
            <td>418</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LATVIA</td>
            <td>UR</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LEBANON</td>
            <td>Lebanese Pound</td>
            <td>LBP</td>
            <td>422</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LESOTHO</td>
            <td>Loti</td>
            <td>LSL</td>
            <td>426</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LESOTHO</td>
            <td>Rand</td>
            <td>ZAR</td>
            <td>710</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LIBERIA</td>
            <td>Liberian Dollar</td>
            <td>LRD</td>
            <td>430</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LIBYA</td>
            <td>Libyan Dinar</td>
            <td>LYD</td>
            <td>434</td>
            <td>3</td>
          </tr>
          <tr>
            <td>LIECHTENSTEIN</td>
            <td>Swiss Franc</td>
            <td>CHF</td>
            <td>756</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LITHUANIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>LUXEMBOURG</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MACAO</td>
            <td>Pataca</td>
            <td>MOP</td>
            <td>446</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)</td>
            <td>Denar</td>
            <td>MKD</td>
            <td>807</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MADAGASCAR</td>
            <td>Malagasy Ariary</td>
            <td>MGA</td>
            <td>969</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MALAWI</td>
            <td>Malawi Kwacha</td>
            <td>MWK</td>
            <td>454</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MALAYSIA</td>
            <td>Malaysian Ringgit</td>
            <td>MYR</td>
            <td>458</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MALDIVES</td>
            <td>Rufiyaa</td>
            <td>MVR</td>
            <td>462</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MALI</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr>
            <td>MALTA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MARSHALL ISLANDS (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MARTINIQUE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MAURITANIA</td>
            <td>Ouguiya</td>
            <td>MRU</td>
            <td>929</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MAURITIUS</td>
            <td>Mauritius Rupee</td>
            <td>MUR</td>
            <td>480</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MAYOTTE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP</td>
            <td>ADB Unit of Account</td>
            <td>XUA</td>
            <td>965</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>MEXICO</td>
            <td>Mexican Peso</td>
            <td>MXN</td>
            <td>484</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MEXICO</td>
            <td>Mexican Unidad de Inversion (UDI)</td>
            <td>MXV</td>
            <td>979</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MICRONESIA (FEDERATED STATES OF)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MOLDOVA (THE REPUBLIC OF)</td>
            <td>Moldovan Leu</td>
            <td>MDL</td>
            <td>498</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MONACO</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MONGOLIA</td>
            <td>Tugrik</td>
            <td>MNT</td>
            <td>496</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MONTENEGRO</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MONTSERRAT</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MOROCCO</td>
            <td>Moroccan Dirham</td>
            <td>MAD</td>
            <td>504</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MOZAMBIQUE</td>
            <td>Mozambique Metical</td>
            <td>MZN</td>
            <td>943</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MYANMAR</td>
            <td>Kyat</td>
            <td>MMK</td>
            <td>104</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NAMIBIA</td>
            <td>Namibia Dollar</td>
            <td>NAD</td>
            <td>516</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NAMIBIA</td>
            <td>Rand</td>
            <td>ZAR</td>
            <td>710</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NAURU</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NEPAL</td>
            <td>Nepalese Rupee</td>
            <td>NPR</td>
            <td>524</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NETHERLANDS (THE)</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NEW CALEDONIA</td>
            <td>CFP Franc</td>
            <td>XPF</td>
            <td>953</td>
            <td>0</td>
          </tr>
          <tr>
            <td>NEW ZEALAND</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NICARAGUA</td>
            <td>Cordoba Oro</td>
            <td>NIO</td>
            <td>558</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NIGER (THE)</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr>
            <td>NIGERIA</td>
            <td>Naira</td>
            <td>NGN</td>
            <td>566</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NIUE</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NORFOLK ISLAND</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NORTHERN MARIANA ISLANDS (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NORWAY</td>
            <td>Norwegian Krone</td>
            <td>NOK</td>
            <td>578</td>
            <td>2</td>
          </tr>
          <tr>
            <td>OMAN</td>
            <td>Rial Omani</td>
            <td>OMR</td>
            <td>512</td>
            <td>3</td>
          </tr>
          <tr>
            <td>PAKISTAN</td>
            <td>Pakistan Rupee</td>
            <td>PKR</td>
            <td>586</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PALAU</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PALESTINE, STATE OF</td>
            <td>No universal currency</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>PANAMA</td>
            <td>Balboa</td>
            <td>PAB</td>
            <td>590</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PANAMA</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PAPUA NEW GUINEA</td>
            <td>Kina</td>
            <td>PGK</td>
            <td>598</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PARAGUAY</td>
            <td>Guarani</td>
            <td>PYG</td>
            <td>600</td>
            <td>0</td>
          </tr>
          <tr>
            <td>PERU</td>
            <td>Sol</td>
            <td>PEN</td>
            <td>604</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PHILIPPINES (THE)</td>
            <td>Philippine Peso</td>
            <td>PHP</td>
            <td>608</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PITCAIRN</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr>
            <td>POLAND</td>
            <td>Zloty</td>
            <td>PLN</td>
            <td>985</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PORTUGAL</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>PUERTO RICO</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>QATAR</td>
            <td>Qatari Rial</td>
            <td>QAR</td>
            <td>634</td>
            <td>2</td>
          </tr>
          <tr>
            <td>RÉUNION</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ROMANIA</td>
            <td>Romanian Leu</td>
            <td>RON</td>
            <td>946</td>
            <td>2</td>
          </tr>
          <tr>
            <td>RUSSIAN FEDERATION (THE)</td>
            <td>Russian Ruble</td>
            <td>RUB</td>
            <td>643</td>
            <td>2</td>
          </tr>
          <tr>
            <td>RWANDA</td>
            <td>Rwanda Franc</td>
            <td>RWF</td>
            <td>646</td>
            <td>0</td>
          </tr>
          <tr>
            <td>SAINT BARTHÉLEMY</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA</td>
            <td>Saint Helena Pound</td>
            <td>SHP</td>
            <td>654</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAINT KITTS AND NEVIS</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAINT LUCIA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAINT MARTIN (FRENCH PART)</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAINT PIERRE AND MIQUELON</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAINT VINCENT AND THE GRENADINES</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAMOA</td>
            <td>Tala</td>
            <td>WST</td>
            <td>882</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAN MARINO</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAO TOME AND PRINCIPE</td>
            <td>Dobra</td>
            <td>STN</td>
            <td>930</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SAUDI ARABIA</td>
            <td>Saudi Riyal</td>
            <td>SAR</td>
            <td>682</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SENEGAL</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr>
            <td>SERBIA</td>
            <td>Serbian Dinar</td>
            <td>RSD</td>
            <td>941</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SEYCHELLES</td>
            <td>Seychelles Rupee</td>
            <td>SCR</td>
            <td>690</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SIERRA LEONE</td>
            <td>Leone</td>
            <td>SLL</td>
            <td>694</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SINGAPORE</td>
            <td>Singapore Dollar</td>
            <td>SGD</td>
            <td>702</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SINT MAARTEN (DUTCH PART)</td>
            <td>Netherlands Antillean Guilder</td>
            <td>ANG</td>
            <td>532</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE"</td>
            <td>Sucre</td>
            <td>XSU</td>
            <td>994</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>SLOVAKIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SLOVENIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SOLOMON ISLANDS</td>
            <td>Solomon Islands Dollar</td>
            <td>SBD</td>
            <td>090</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SOMALIA</td>
            <td>Somali Shilling</td>
            <td>SOS</td>
            <td>706</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SOUTH AFRICA</td>
            <td>Rand</td>
            <td>ZAR</td>
            <td>710</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</td>
            <td>No universal currency</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>SOUTH SUDAN</td>
            <td>South Sudanese Pound</td>
            <td>SSP</td>
            <td>728</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SPAIN</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SRI LANKA</td>
            <td>Sri Lanka Rupee</td>
            <td>LKR</td>
            <td>144</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SUDAN (THE)</td>
            <td>Sudanese Pound</td>
            <td>SDG</td>
            <td>938</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SURINAME</td>
            <td>Surinam Dollar</td>
            <td>SRD</td>
            <td>968</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SVALBARD AND JAN MAYEN</td>
            <td>Norwegian Krone</td>
            <td>NOK</td>
            <td>578</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ESWATINI</td>
            <td>Lilangeni</td>
            <td>SZL</td>
            <td>748</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SWEDEN</td>
            <td>Swedish Krona</td>
            <td>SEK</td>
            <td>752</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SWITZERLAND</td>
            <td>Swiss Franc</td>
            <td>CHF</td>
            <td>756</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SWITZERLAND</td>
            <td>WIR Euro</td>
            <td>CHE</td>
            <td>947</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SWITZERLAND</td>
            <td>WIR Franc</td>
            <td>CHW</td>
            <td>948</td>
            <td>2</td>
          </tr>
          <tr>
            <td>SYRIAN ARAB REPUBLIC</td>
            <td>Syrian Pound</td>
            <td>SYP</td>
            <td>760</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TAIWAN (PROVINCE OF CHINA)</td>
            <td>New Taiwan Dollar</td>
            <td>TWD</td>
            <td>901</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TAJIKISTAN</td>
            <td>Somoni</td>
            <td>TJS</td>
            <td>972</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TANZANIA, UNITED REPUBLIC OF</td>
            <td>Tanzanian Shilling</td>
            <td>TZS</td>
            <td>834</td>
            <td>2</td>
          </tr>
          <tr>
            <td>THAILAND</td>
            <td>Baht</td>
            <td>THB</td>
            <td>764</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TIMOR-LESTE</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TOGO</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr>
            <td>TOKELAU</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TONGA</td>
            <td>Pa'anga</td>
            <td>TOP</td>
            <td>776</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TRINIDAD AND TOBAGO</td>
            <td>Trinidad and Tobago Dollar</td>
            <td>TTD</td>
            <td>780</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TUNISIA</td>
            <td>Tunisian Dinar</td>
            <td>TND</td>
            <td>788</td>
            <td>3</td>
          </tr>
          <tr>
            <td>TURKEY</td>
            <td>Turkish Lira</td>
            <td>TRY</td>
            <td>949</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TURKMENISTAN</td>
            <td>Turkmenistan New Manat</td>
            <td>TMT</td>
            <td>934</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TURKS AND CAICOS ISLANDS (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TUVALU</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr>
            <td>UGANDA</td>
            <td>Uganda Shilling</td>
            <td>UGX</td>
            <td>800</td>
            <td>0</td>
          </tr>
          <tr>
            <td>UKRAINE</td>
            <td>Hryvnia</td>
            <td>UAH</td>
            <td>980</td>
            <td>2</td>
          </tr>
          <tr>
            <td>UNITED ARAB EMIRATES (THE)</td>
            <td>UAE Dirham</td>
            <td>AED</td>
            <td>784</td>
            <td>2</td>
          </tr>
          <tr>
            <td>UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)</td>
            <td>Pound Sterling</td>
            <td>GBP</td>
            <td>826</td>
            <td>2</td>
          </tr>
          <tr>
            <td>UNITED STATES MINOR OUTLYING ISLANDS (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>UNITED STATES OF AMERICA (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>UNITED STATES OF AMERICA (THE)</td>
            <td>US Dollar (Next day)</td>
            <td>USN</td>
            <td>997</td>
            <td>2</td>
          </tr>
          <tr>
            <td>URUGUAY</td>
            <td>Peso Uruguayo</td>
            <td>UYU</td>
            <td>858</td>
            <td>2</td>
          </tr>
          <tr>
            <td>URUGUAY</td>
            <td>Uruguay Peso en Unidades Indexadas (UI)</td>
            <td>UYI</td>
            <td>940</td>
            <td>0</td>
          </tr>
          <tr>
            <td>URUGUAY</td>
            <td>Unidad Previsional</td>
            <td>UYW</td>
            <td>927</td>
            <td>4</td>
          </tr>
          <tr>
            <td>UZBEKISTAN</td>
            <td>Uzbekistan Sum</td>
            <td>UZS</td>
            <td>860</td>
            <td>2</td>
          </tr>
          <tr>
            <td>VANUATU</td>
            <td>Vatu</td>
            <td>VUV</td>
            <td>548</td>
            <td>0</td>
          </tr>
          <tr>
            <td>VENEZUELA (BOLIVARIAN REPUBLIC OF)</td>
            <td>Bolívar Soberano</td>
            <td>VES</td>
            <td>928</td>
            <td>2</td>
          </tr>
          <tr>
            <td>VIET NAM</td>
            <td>Dong</td>
            <td>VND</td>
            <td>704</td>
            <td>0</td>
          </tr>
          <tr>
            <td>VIRGIN ISLANDS (BRITISH)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>VIRGIN ISLANDS (U.S.)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr>
            <td>WALLIS AND FUTUNA</td>
            <td>CFP Franc</td>
            <td>XPF</td>
            <td>953</td>
            <td>0</td>
          </tr>
          <tr>
            <td>WESTERN SAHARA</td>
            <td>Moroccan Dirham</td>
            <td>MAD</td>
            <td>504</td>
            <td>2</td>
          </tr>
          <tr>
            <td>YEMEN</td>
            <td>Yemeni Rial</td>
            <td>YER</td>
            <td>886</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ZAMBIA</td>
            <td>Zambian Kwacha</td>
            <td>ZMW</td>
            <td>967</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ZIMBABWE</td>
            <td>Zimbabwe Dollar</td>
            <td>ZWL</td>
            <td>932</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ZZ01_Bond Markets Unit European_EURCO</td>
            <td>Bond Markets Unit European Composite Unit (EURCO)</td>
            <td>XBA</td>
            <td>955</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>ZZ02_Bond Markets Unit European_EMU-6</td>
            <td>Bond Markets Unit European Monetary Unit (E.M.U.-6)</td>
            <td>XBB</td>
            <td>956</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>ZZ03_Bond Markets Unit European_EUA-9</td>
            <td>Bond Markets Unit European Unit of Account 9 (E.U.A.-9)</td>
            <td>XBC</td>
            <td>957</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>ZZ04_Bond Markets Unit European_EUA-17</td>
            <td>Bond Markets Unit European Unit of Account 17 (E.U.A.-17)</td>
            <td>XBD</td>
            <td>958</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>ZZ06_Testing_Code</td>
            <td>Codes specifically reserved for testing purposes</td>
            <td>XTS</td>
            <td>963</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>ZZ07_No_Currency</td>
            <td>
              The codes assigned for transactions where no currency is involved
            </td>
            <td>XXX</td>
            <td>999</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>ZZ08_Gold</td>
            <td>Gold</td>
            <td>XAU</td>
            <td>959</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>ZZ09_Palladium</td>
            <td>Palladium</td>
            <td>XPD</td>
            <td>964</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>ZZ10_Platinum</td>
            <td>Platinum</td>
            <td>XPT</td>
            <td>962</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>ZZ11_Silver</td>
            <td>Silver</td>
            <td>XAG</td>
            <td>961</td>
            <td>NA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;
