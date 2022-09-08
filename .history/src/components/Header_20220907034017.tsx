import axios from "axios";
import React, { useEffect } from "react";

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
  debugger;

  return (
    <div>
      <table id='currency_codes' class='std_table'>
        <tbody>
          <tr>
            <th data-search='1'>Entity / Location</th>
            <th data-search='1'>Currency</th>
            <th data-search='1'>Alphabetic Code</th>
            <th data-search='1'>Numeric Code</th>
            <th>Minor Unit</th>
          </tr>
          <tr class=' '>
            <td>AFGHANISTAN</td>
            <td>Afghani</td>
            <td>AFN</td>
            <td>971</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ÅLAND ISLANDS</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ALBANIA</td>
            <td>Lek</td>
            <td>ALL</td>
            <td>008</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ALGERIA</td>
            <td>Algerian Dinar</td>
            <td>DZD</td>
            <td>012</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>AMERICAN SAMOA</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ANDORRA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ANGOLA</td>
            <td>Kwanza</td>
            <td>AOA</td>
            <td>973</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ANGUILLA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ANTARCTICA</td>
            <td>No universal currency</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr class=' '>
            <td>ANTIGUA AND BARBUDA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ARGENTINA</td>
            <td>Argentine Peso</td>
            <td>ARS</td>
            <td>032</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ARMENIA</td>
            <td>Armenian Dram</td>
            <td>AMD</td>
            <td>051</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ARUBA</td>
            <td>Aruban Florin</td>
            <td>AWG</td>
            <td>533</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>AUSTRALIA</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>AUSTRIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>AZERBAIJAN</td>
            <td>Azerbaijan Manat</td>
            <td>AZN</td>
            <td>944</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BAHAMAS (THE)</td>
            <td>Bahamian Dollar</td>
            <td>BSD</td>
            <td>044</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BAHRAIN</td>
            <td>Bahraini Dinar</td>
            <td>BHD</td>
            <td>048</td>
            <td>3</td>
          </tr>
          <tr class=' '>
            <td>BANGLADESH</td>
            <td>Taka</td>
            <td>BDT</td>
            <td>050</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BARBADOS</td>
            <td>Barbados Dollar</td>
            <td>BBD</td>
            <td>052</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BELARUS</td>
            <td>Belarusian Ruble</td>
            <td>BYN</td>
            <td>933</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BELGIUM</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BELIZE</td>
            <td>Belize Dollar</td>
            <td>BZD</td>
            <td>084</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BENIN</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>BERMUDA</td>
            <td>Bermudian Dollar</td>
            <td>BMD</td>
            <td>060</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BHUTAN</td>
            <td>Indian Rupee</td>
            <td>INR</td>
            <td>356</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BHUTAN</td>
            <td>Ngultrum</td>
            <td>BTN</td>
            <td>064</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BOLIVIA (PLURINATIONAL STATE OF)</td>
            <td>Boliviano</td>
            <td>BOB</td>
            <td>068</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BOLIVIA (PLURINATIONAL STATE OF)</td>
            <td>Mvdol</td>
            <td>BOV</td>
            <td>984</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BONAIRE, SINT EUSTATIUS AND SABA</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BOSNIA AND HERZEGOVINA</td>
            <td>Convertible Mark</td>
            <td>BAM</td>
            <td>977</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BOTSWANA</td>
            <td>Pula</td>
            <td>BWP</td>
            <td>072</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BOUVET ISLAND</td>
            <td>Norwegian Krone</td>
            <td>NOK</td>
            <td>578</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BRAZIL</td>
            <td>Brazilian Real</td>
            <td>BRL</td>
            <td>986</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BRITISH INDIAN OCEAN TERRITORY (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BRUNEI DARUSSALAM</td>
            <td>Brunei Dollar</td>
            <td>BND</td>
            <td>096</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BULGARIA</td>
            <td>Bulgarian Lev</td>
            <td>BGN</td>
            <td>975</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>BURKINA FASO</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>BURUNDI</td>
            <td>Burundi Franc</td>
            <td>BIF</td>
            <td>108</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>CABO VERDE</td>
            <td>Cabo Verde Escudo</td>
            <td>CVE</td>
            <td>132</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CAMBODIA</td>
            <td>Riel</td>
            <td>KHR</td>
            <td>116</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CAMEROON</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>CANADA</td>
            <td>Canadian Dollar</td>
            <td>CAD</td>
            <td>124</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CAYMAN ISLANDS (THE)</td>
            <td>Cayman Islands Dollar</td>
            <td>KYD</td>
            <td>136</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CENTRAL AFRICAN REPUBLIC (THE)</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>CHAD</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>CHILE</td>
            <td>Chilean Peso</td>
            <td>CLP</td>
            <td>152</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>CHILE</td>
            <td>Unidad de Fomento</td>
            <td>CLF</td>
            <td>990</td>
            <td>4</td>
          </tr>
          <tr class=' '>
            <td>CHINA</td>
            <td>Yuan Renminbi</td>
            <td>CNY</td>
            <td>156</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CHRISTMAS ISLAND</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>COCOS (KEELING) ISLANDS (THE)</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>COLOMBIA</td>
            <td>Colombian Peso</td>
            <td>COP</td>
            <td>170</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>COLOMBIA</td>
            <td>Unidad de Valor Real</td>
            <td>COU</td>
            <td>970</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>COMOROS (THE)</td>
            <td>Comorian Franc</td>
            <td>KMF</td>
            <td>174</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>CONGO (THE DEMOCRATIC REPUBLIC OF THE)</td>
            <td>Congolese Franc</td>
            <td>CDF</td>
            <td>976</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CONGO (THE)</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>COOK ISLANDS (THE)</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>COSTA RICA</td>
            <td>Costa Rican Colon</td>
            <td>CRC</td>
            <td>188</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CÔTE D'IVOIRE</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>CROATIA</td>
            <td>Kuna</td>
            <td>HRK</td>
            <td>191</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CUBA</td>
            <td>Cuban Peso</td>
            <td>CUP</td>
            <td>192</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CUBA</td>
            <td>Peso Convertible</td>
            <td>CUC</td>
            <td>931</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CURAÇAO</td>
            <td>Netherlands Antillean Guilder</td>
            <td>ANG</td>
            <td>532</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CYPRUS</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>CZECHIA</td>
            <td>Czech Koruna</td>
            <td>CZK</td>
            <td>203</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>DENMARK</td>
            <td>Danish Krone</td>
            <td>DKK</td>
            <td>208</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>DJIBOUTI</td>
            <td>Djibouti Franc</td>
            <td>DJF</td>
            <td>262</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>DOMINICA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>DOMINICAN REPUBLIC (THE)</td>
            <td>Dominican Peso</td>
            <td>DOP</td>
            <td>214</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ECUADOR</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>EGYPT</td>
            <td>Egyptian Pound</td>
            <td>EGP</td>
            <td>818</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>EL SALVADOR</td>
            <td>El Salvador Colon</td>
            <td>SVC</td>
            <td>222</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>EL SALVADOR</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>EQUATORIAL GUINEA</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>ERITREA</td>
            <td>Nakfa</td>
            <td>ERN</td>
            <td>232</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ESTONIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ETHIOPIA</td>
            <td>Ethiopian Birr</td>
            <td>ETB</td>
            <td>230</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>EUROPEAN UNION</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>FALKLAND ISLANDS (THE) [MALVINAS]</td>
            <td>Falkland Islands Pound</td>
            <td>FKP</td>
            <td>238</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>FAROE ISLANDS (THE)</td>
            <td>Danish Krone</td>
            <td>DKK</td>
            <td>208</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>FIJI</td>
            <td>Fiji Dollar</td>
            <td>FJD</td>
            <td>242</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>FINLAND</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>FRANCE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>FRENCH GUIANA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>FRENCH POLYNESIA</td>
            <td>CFP Franc</td>
            <td>XPF</td>
            <td>953</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>FRENCH SOUTHERN TERRITORIES (THE)</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GABON</td>
            <td>CFA Franc BEAC</td>
            <td>XAF</td>
            <td>950</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>GAMBIA (THE)</td>
            <td>Dalasi</td>
            <td>GMD</td>
            <td>270</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GEORGIA</td>
            <td>Lari</td>
            <td>GEL</td>
            <td>981</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GERMANY</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GHANA</td>
            <td>Ghana Cedi</td>
            <td>GHS</td>
            <td>936</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GIBRALTAR</td>
            <td>Gibraltar Pound</td>
            <td>GIP</td>
            <td>292</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GREECE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GREENLAND</td>
            <td>Danish Krone</td>
            <td>DKK</td>
            <td>208</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GRENADA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GUADELOUPE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GUAM</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GUATEMALA</td>
            <td>Quetzal</td>
            <td>GTQ</td>
            <td>320</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GUERNSEY</td>
            <td>Pound Sterling</td>
            <td>GBP</td>
            <td>826</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>GUINEA</td>
            <td>Guinean Franc</td>
            <td>GNF</td>
            <td>324</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>GUINEA-BISSAU</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>GUYANA</td>
            <td>Guyana Dollar</td>
            <td>GYD</td>
            <td>328</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>HAITI</td>
            <td>Gourde</td>
            <td>HTG</td>
            <td>332</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>HAITI</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>HEARD ISLAND AND McDONALD ISLANDS</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>HOLY SEE (THE)</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>HONDURAS</td>
            <td>Lempira</td>
            <td>HNL</td>
            <td>340</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>HONG KONG</td>
            <td>Hong Kong Dollar</td>
            <td>HKD</td>
            <td>344</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>HUNGARY</td>
            <td>Forint</td>
            <td>HUF</td>
            <td>348</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ICELAND</td>
            <td>Iceland Krona</td>
            <td>ISK</td>
            <td>352</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>INDIA</td>
            <td>Indian Rupee</td>
            <td>INR</td>
            <td>356</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>INDONESIA</td>
            <td>Rupiah</td>
            <td>IDR</td>
            <td>360</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>INTERNATIONAL MONETARY FUND (IMF)</td>
            <td>SDR (Special Drawing Right)</td>
            <td>XDR</td>
            <td>960</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>IRAN (ISLAMIC REPUBLIC OF)</td>
            <td>Iranian Rial</td>
            <td>IRR</td>
            <td>364</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>IRAQ</td>
            <td>Iraqi Dinar</td>
            <td>IQD</td>
            <td>368</td>
            <td>3</td>
          </tr>
          <tr class=' '>
            <td>IRELAND</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ISLE OF MAN</td>
            <td>Pound Sterling</td>
            <td>GBP</td>
            <td>826</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ISRAEL</td>
            <td>New Israeli Sheqel</td>
            <td>ILS</td>
            <td>376</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ITALY</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>JAMAICA</td>
            <td>Jamaican Dollar</td>
            <td>JMD</td>
            <td>388</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>JAPAN</td>
            <td>Yen</td>
            <td>JPY</td>
            <td>392</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>JERSEY</td>
            <td>Pound Sterling</td>
            <td>GBP</td>
            <td>826</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>JORDAN</td>
            <td>Jordanian Dinar</td>
            <td>JOD</td>
            <td>400</td>
            <td>3</td>
          </tr>
          <tr class=' '>
            <td>KAZAKHSTAN</td>
            <td>Tenge</td>
            <td>KZT</td>
            <td>398</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>KENYA</td>
            <td>Kenyan Shilling</td>
            <td>KES</td>
            <td>404</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>KIRIBATI</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>KOREA (THE DEMOCRATIC PEOPLE'S REPUBLIC OF)</td>
            <td>North Korean Won</td>
            <td>KPW</td>
            <td>408</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>KOREA (THE REPUBLIC OF)</td>
            <td>Won</td>
            <td>KRW</td>
            <td>410</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>KUWAIT</td>
            <td>Kuwaiti Dinar</td>
            <td>KWD</td>
            <td>414</td>
            <td>3</td>
          </tr>
          <tr class=' '>
            <td>KYRGYZSTAN</td>
            <td>Som</td>
            <td>KGS</td>
            <td>417</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>LAO PEOPLE'S DEMOCRATIC REPUBLIC (THE)</td>
            <td>Lao Kip</td>
            <td>LAK</td>
            <td>418</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>LATVIA</td>
            <td>UR</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>LEBANON</td>
            <td>Lebanese Pound</td>
            <td>LBP</td>
            <td>422</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>LESOTHO</td>
            <td>Loti</td>
            <td>LSL</td>
            <td>426</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>LESOTHO</td>
            <td>Rand</td>
            <td>ZAR</td>
            <td>710</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>LIBERIA</td>
            <td>Liberian Dollar</td>
            <td>LRD</td>
            <td>430</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>LIBYA</td>
            <td>Libyan Dinar</td>
            <td>LYD</td>
            <td>434</td>
            <td>3</td>
          </tr>
          <tr class=' '>
            <td>LIECHTENSTEIN</td>
            <td>Swiss Franc</td>
            <td>CHF</td>
            <td>756</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>LITHUANIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>LUXEMBOURG</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MACAO</td>
            <td>Pataca</td>
            <td>MOP</td>
            <td>446</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)</td>
            <td>Denar</td>
            <td>MKD</td>
            <td>807</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MADAGASCAR</td>
            <td>Malagasy Ariary</td>
            <td>MGA</td>
            <td>969</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MALAWI</td>
            <td>Malawi Kwacha</td>
            <td>MWK</td>
            <td>454</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MALAYSIA</td>
            <td>Malaysian Ringgit</td>
            <td>MYR</td>
            <td>458</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MALDIVES</td>
            <td>Rufiyaa</td>
            <td>MVR</td>
            <td>462</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MALI</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>MALTA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MARSHALL ISLANDS (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MARTINIQUE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MAURITANIA</td>
            <td>Ouguiya</td>
            <td>MRU</td>
            <td>929</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MAURITIUS</td>
            <td>Mauritius Rupee</td>
            <td>MUR</td>
            <td>480</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MAYOTTE</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP</td>
            <td>ADB Unit of Account</td>
            <td>XUA</td>
            <td>965</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>MEXICO</td>
            <td>Mexican Peso</td>
            <td>MXN</td>
            <td>484</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MEXICO</td>
            <td>Mexican Unidad de Inversion (UDI)</td>
            <td>MXV</td>
            <td>979</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MICRONESIA (FEDERATED STATES OF)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MOLDOVA (THE REPUBLIC OF)</td>
            <td>Moldovan Leu</td>
            <td>MDL</td>
            <td>498</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MONACO</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MONGOLIA</td>
            <td>Tugrik</td>
            <td>MNT</td>
            <td>496</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MONTENEGRO</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MONTSERRAT</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MOROCCO</td>
            <td>Moroccan Dirham</td>
            <td>MAD</td>
            <td>504</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MOZAMBIQUE</td>
            <td>Mozambique Metical</td>
            <td>MZN</td>
            <td>943</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>MYANMAR</td>
            <td>Kyat</td>
            <td>MMK</td>
            <td>104</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NAMIBIA</td>
            <td>Namibia Dollar</td>
            <td>NAD</td>
            <td>516</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NAMIBIA</td>
            <td>Rand</td>
            <td>ZAR</td>
            <td>710</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NAURU</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NEPAL</td>
            <td>Nepalese Rupee</td>
            <td>NPR</td>
            <td>524</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NETHERLANDS (THE)</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NEW CALEDONIA</td>
            <td>CFP Franc</td>
            <td>XPF</td>
            <td>953</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>NEW ZEALAND</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NICARAGUA</td>
            <td>Cordoba Oro</td>
            <td>NIO</td>
            <td>558</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NIGER (THE)</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>NIGERIA</td>
            <td>Naira</td>
            <td>NGN</td>
            <td>566</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NIUE</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NORFOLK ISLAND</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NORTHERN MARIANA ISLANDS (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>NORWAY</td>
            <td>Norwegian Krone</td>
            <td>NOK</td>
            <td>578</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>OMAN</td>
            <td>Rial Omani</td>
            <td>OMR</td>
            <td>512</td>
            <td>3</td>
          </tr>
          <tr class=' '>
            <td>PAKISTAN</td>
            <td>Pakistan Rupee</td>
            <td>PKR</td>
            <td>586</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>PALAU</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>PALESTINE, STATE OF</td>
            <td>No universal currency</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr class=' '>
            <td>PANAMA</td>
            <td>Balboa</td>
            <td>PAB</td>
            <td>590</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>PANAMA</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>PAPUA NEW GUINEA</td>
            <td>Kina</td>
            <td>PGK</td>
            <td>598</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>PARAGUAY</td>
            <td>Guarani</td>
            <td>PYG</td>
            <td>600</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>PERU</td>
            <td>Sol</td>
            <td>PEN</td>
            <td>604</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>PHILIPPINES (THE)</td>
            <td>Philippine Peso</td>
            <td>PHP</td>
            <td>608</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>PITCAIRN</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>POLAND</td>
            <td>Zloty</td>
            <td>PLN</td>
            <td>985</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>PORTUGAL</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>PUERTO RICO</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>QATAR</td>
            <td>Qatari Rial</td>
            <td>QAR</td>
            <td>634</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>RÉUNION</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ROMANIA</td>
            <td>Romanian Leu</td>
            <td>RON</td>
            <td>946</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>RUSSIAN FEDERATION (THE)</td>
            <td>Russian Ruble</td>
            <td>RUB</td>
            <td>643</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>RWANDA</td>
            <td>Rwanda Franc</td>
            <td>RWF</td>
            <td>646</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>SAINT BARTHÉLEMY</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA</td>
            <td>Saint Helena Pound</td>
            <td>SHP</td>
            <td>654</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAINT KITTS AND NEVIS</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAINT LUCIA</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAINT MARTIN (FRENCH PART)</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAINT PIERRE AND MIQUELON</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAINT VINCENT AND THE GRENADINES</td>
            <td>East Caribbean Dollar</td>
            <td>XCD</td>
            <td>951</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAMOA</td>
            <td>Tala</td>
            <td>WST</td>
            <td>882</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAN MARINO</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAO TOME AND PRINCIPE</td>
            <td>Dobra</td>
            <td>STN</td>
            <td>930</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SAUDI ARABIA</td>
            <td>Saudi Riyal</td>
            <td>SAR</td>
            <td>682</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SENEGAL</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>SERBIA</td>
            <td>Serbian Dinar</td>
            <td>RSD</td>
            <td>941</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SEYCHELLES</td>
            <td>Seychelles Rupee</td>
            <td>SCR</td>
            <td>690</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SIERRA LEONE</td>
            <td>Leone</td>
            <td>SLL</td>
            <td>694</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SINGAPORE</td>
            <td>Singapore Dollar</td>
            <td>SGD</td>
            <td>702</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SINT MAARTEN (DUTCH PART)</td>
            <td>Netherlands Antillean Guilder</td>
            <td>ANG</td>
            <td>532</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE"</td>
            <td>Sucre</td>
            <td>XSU</td>
            <td>994</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>SLOVAKIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SLOVENIA</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SOLOMON ISLANDS</td>
            <td>Solomon Islands Dollar</td>
            <td>SBD</td>
            <td>090</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SOMALIA</td>
            <td>Somali Shilling</td>
            <td>SOS</td>
            <td>706</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SOUTH AFRICA</td>
            <td>Rand</td>
            <td>ZAR</td>
            <td>710</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</td>
            <td>No universal currency</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr class=' '>
            <td>SOUTH SUDAN</td>
            <td>South Sudanese Pound</td>
            <td>SSP</td>
            <td>728</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SPAIN</td>
            <td>Euro</td>
            <td>EUR</td>
            <td>978</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SRI LANKA</td>
            <td>Sri Lanka Rupee</td>
            <td>LKR</td>
            <td>144</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SUDAN (THE)</td>
            <td>Sudanese Pound</td>
            <td>SDG</td>
            <td>938</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SURINAME</td>
            <td>Surinam Dollar</td>
            <td>SRD</td>
            <td>968</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SVALBARD AND JAN MAYEN</td>
            <td>Norwegian Krone</td>
            <td>NOK</td>
            <td>578</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ESWATINI</td>
            <td>Lilangeni</td>
            <td>SZL</td>
            <td>748</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SWEDEN</td>
            <td>Swedish Krona</td>
            <td>SEK</td>
            <td>752</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SWITZERLAND</td>
            <td>Swiss Franc</td>
            <td>CHF</td>
            <td>756</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SWITZERLAND</td>
            <td>WIR Euro</td>
            <td>CHE</td>
            <td>947</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SWITZERLAND</td>
            <td>WIR Franc</td>
            <td>CHW</td>
            <td>948</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>SYRIAN ARAB REPUBLIC</td>
            <td>Syrian Pound</td>
            <td>SYP</td>
            <td>760</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TAIWAN (PROVINCE OF CHINA)</td>
            <td>New Taiwan Dollar</td>
            <td>TWD</td>
            <td>901</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TAJIKISTAN</td>
            <td>Somoni</td>
            <td>TJS</td>
            <td>972</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TANZANIA, UNITED REPUBLIC OF</td>
            <td>Tanzanian Shilling</td>
            <td>TZS</td>
            <td>834</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>THAILAND</td>
            <td>Baht</td>
            <td>THB</td>
            <td>764</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TIMOR-LESTE</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TOGO</td>
            <td>CFA Franc BCEAO</td>
            <td>XOF</td>
            <td>952</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>TOKELAU</td>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>554</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TONGA</td>
            <td>Pa'anga</td>
            <td>TOP</td>
            <td>776</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TRINIDAD AND TOBAGO</td>
            <td>Trinidad and Tobago Dollar</td>
            <td>TTD</td>
            <td>780</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TUNISIA</td>
            <td>Tunisian Dinar</td>
            <td>TND</td>
            <td>788</td>
            <td>3</td>
          </tr>
          <tr class=' '>
            <td>TURKEY</td>
            <td>Turkish Lira</td>
            <td>TRY</td>
            <td>949</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TURKMENISTAN</td>
            <td>Turkmenistan New Manat</td>
            <td>TMT</td>
            <td>934</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TURKS AND CAICOS ISLANDS (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>TUVALU</td>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>036</td>
            <td>2</td>
          </tr>
          <tr class=' '>
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
          <tr class=' '>
            <td>UNITED ARAB EMIRATES (THE)</td>
            <td>UAE Dirham</td>
            <td>AED</td>
            <td>784</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)</td>
            <td>Pound Sterling</td>
            <td>GBP</td>
            <td>826</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>UNITED STATES MINOR OUTLYING ISLANDS (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>UNITED STATES OF AMERICA (THE)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>UNITED STATES OF AMERICA (THE)</td>
            <td>US Dollar (Next day)</td>
            <td>USN</td>
            <td>997</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>URUGUAY</td>
            <td>Peso Uruguayo</td>
            <td>UYU</td>
            <td>858</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>URUGUAY</td>
            <td>Uruguay Peso en Unidades Indexadas (UI)</td>
            <td>UYI</td>
            <td>940</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>URUGUAY</td>
            <td>Unidad Previsional</td>
            <td>UYW</td>
            <td>927</td>
            <td>4</td>
          </tr>
          <tr class=' '>
            <td>UZBEKISTAN</td>
            <td>Uzbekistan Sum</td>
            <td>UZS</td>
            <td>860</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>VANUATU</td>
            <td>Vatu</td>
            <td>VUV</td>
            <td>548</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>VENEZUELA (BOLIVARIAN REPUBLIC OF)</td>
            <td>Bolívar Soberano</td>
            <td>VES</td>
            <td>928</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>VIET NAM</td>
            <td>Dong</td>
            <td>VND</td>
            <td>704</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>VIRGIN ISLANDS (BRITISH)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>VIRGIN ISLANDS (U.S.)</td>
            <td>US Dollar</td>
            <td>USD</td>
            <td>840</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>WALLIS AND FUTUNA</td>
            <td>CFP Franc</td>
            <td>XPF</td>
            <td>953</td>
            <td>0</td>
          </tr>
          <tr class=' '>
            <td>WESTERN SAHARA</td>
            <td>Moroccan Dirham</td>
            <td>MAD</td>
            <td>504</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>YEMEN</td>
            <td>Yemeni Rial</td>
            <td>YER</td>
            <td>886</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ZAMBIA</td>
            <td>Zambian Kwacha</td>
            <td>ZMW</td>
            <td>967</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ZIMBABWE</td>
            <td>Zimbabwe Dollar</td>
            <td>ZWL</td>
            <td>932</td>
            <td>2</td>
          </tr>
          <tr class=' '>
            <td>ZZ01_Bond Markets Unit European_EURCO</td>
            <td>Bond Markets Unit European Composite Unit (EURCO)</td>
            <td>XBA</td>
            <td>955</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>ZZ02_Bond Markets Unit European_EMU-6</td>
            <td>Bond Markets Unit European Monetary Unit (E.M.U.-6)</td>
            <td>XBB</td>
            <td>956</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>ZZ03_Bond Markets Unit European_EUA-9</td>
            <td>Bond Markets Unit European Unit of Account 9 (E.U.A.-9)</td>
            <td>XBC</td>
            <td>957</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>ZZ04_Bond Markets Unit European_EUA-17</td>
            <td>Bond Markets Unit European Unit of Account 17 (E.U.A.-17)</td>
            <td>XBD</td>
            <td>958</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>ZZ06_Testing_Code</td>
            <td>Codes specifically reserved for testing purposes</td>
            <td>XTS</td>
            <td>963</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>ZZ07_No_Currency</td>
            <td>
              The codes assigned for transactions where no currency is involved
            </td>
            <td>XXX</td>
            <td>999</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>ZZ08_Gold</td>
            <td>Gold</td>
            <td>XAU</td>
            <td>959</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>ZZ09_Palladium</td>
            <td>Palladium</td>
            <td>XPD</td>
            <td>964</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
            <td>ZZ10_Platinum</td>
            <td>Platinum</td>
            <td>XPT</td>
            <td>962</td>
            <td>NA</td>
          </tr>
          <tr class=' '>
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
