import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import currency from "../currency/currency";
import {
  CurrencyResponseType,
  CurrencyType,
  WindowsWithCurrencyType,
} from "../types/types";
export const defaultCurrency = JSON.parse(
  '[{"code":980,"currency":"UAH","name":"Украинская гривна","flag":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACgAgMAAABPtQn2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAW7v/1QD///8MMmD9AAAAAWJLR0QCZgt8ZAAAAAd0SU1FB+YCFw47HJnq8AQAAAAwSURBVGje7csxDQAACAOwmcS/FUTsIrR/EwAAAAB4ZAqyLMuyLMuyLMuyLMuyfCwvDmY6GxlvVDYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDItMjNUMTQ6NTk6MjgrMDA6MDAKssjEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAyLTIzVDE0OjU5OjI4KzAwOjAwe+9weAAAAABJRU5ErkJggg=="},{"code":840,"currency":"USD","name":"Доллар США","flag":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB+CAMAAAAtMWwIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEU8O26yIjRiYYphYYqiobqhoLlbW4WKiajl5ew9PG+RkK36+vz////8/P2enbc+PW+mpr3d3OW2tslOTXyBgKE/PnDKZnNwb5VvbpSvr8SvrsNbWoWxscXw8PRsa5Lq6e+rqsCqqsDi4umMjKpEQ3ROTXteXYd+fZ99fJ69vc68vM7W1eD7+/zQeINQT33S0t24uMpAP3Ha2uRpaJBlZIzY2OJBQHFKSXhHRnaMi6mLiqlJSHjMy9lUU4DX1+FYV4LGxdTr6/BHR3fFxdRLSnnAv9D67/FZWIRDQnOZmbOZmLNWVYHc3OVCQXP+/v6sq8HT09/Pz9ucnLY+PXCQkK1nZo5mZY2mpbztzdGXlrKEg6P29vj4+Prg4Oinp75ycpZ1dJh0c5i0tMezs8fLy9hhYIncmqLh4emAf6F7ep3g3+hNTHuDgqOCgqLDwtLCwtJgX4ny8vX9/f7Kytj39/leXohRUX6Pj6y+RVTGxtW3t8rj4+pFRHWop75PPGtclE3qAAAAAWJLR0QMgbNRYwAAAAd0SU1FB+EICgIjK1+Qk20AAAM4SURBVHja7ZtrV1JREIZ3WcKxKS+opKiYokWiqJVaRwuJlEJT00oytAztYhdvWWn12xNcwDl+ftV3xcyHs3i+zbNmztp7zt4Yc8JxjiyMCpeJ8PkKd54wZhW+cNGdMIwphSs9Hq/X46ksZItkSmGr6pLI5SvVhYSRTNrSNSI1zo7EMalwbV1drTNhHHMK++qNqfflfjU0YNk0ksXxZdN/FctGyOK4cFMzlrmFA80tra0tzQEU81e4LSgSbMMxf0u3i1xDMruw1dHZ2WHhmFg4FMo9u7qN6e7CMbHw9RvuWsOYVTh8050wjCmFK3q8kYi3pzjSIrmXLI4y7IuKRPtK9QEy6fDQH4n0OzsSx5zCA4O3bt8ZKuULZE7h4RFjRobzC0sXlum/Wt69h2Vu4ZBtj47adgjF9MJj0dxKdf8BivlbeiAsEh7AMf87HBsfjyGZXTj+0Jd4ZOP4MCbIopDX5GTumTwc7awkjomHh8dP3LWGMaVwyu+fmvL7U4VskUwpPN3+9PBnf3H9RDJpS8+IzDg7EsekwrNzc7POhHHMKex7Nm8t5I9GLAvL9CcPz19gmV645iWWzSJZuI9a0ulgMJ0OoJh/a/lqSeR1FY75hwf0TQB64czycgbJvMJD+U9uvhVjVnw4JhZ+89ZdGBizCq++cycMY0rhilh2aSkbKx2VAJmzwmsZkcxaqT5AJm3pJpEm190UGK+TxVFW1e8/fPw0X8oXyJx76Y0xY8Y28p/h4limHx4+f8EyvfDXb1jmFt4c3Nre3hrcRDF/he0dkR0bx/wtHd7dDSOZXTjZ8z0QDeGYWHhvL7+oTBszHccxsfDCD3etYfyTLPJJJVKpaDSVShSyRTLlXnrjV67Yo8WLVkjmHB6sfZF9561YHJNOS9mDg6zzFcQxp3Bi9XfyT6KUL5BJb+IVH3Bmv5im/x/+74T/nnDQbTykzEKFVViFVViFVViFz1B4vcyCbq974ntpFVZhFVZhFVZhFT474cUyCx0eVFiFVViFVViFz1B4osxC99IqrMIqrMIqrMIqfHrCvWUWOjyosAqrsAqrsAqr8OkJN5ZZ6PCgwiqswiqswiqswqcW/wBRXveQ8JlhLwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOC0xMFQwMjozNTo0MyswMDowMDuSuyAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDgtMTBUMDI6MzU6NDMrMDA6MDBKzwOcAAAAAElFTkSuQmCC","rateBuy":36.65,"rateSell":37.4995},{"code":978,"currency":"EUR","name":"Евро","flag":"data:image/png;base64,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","rateBuy":36.35,"rateSell":37.2495},{"code":826,"currency":"GBP","name":"Фунт стерлингов","flag":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB4CAMAAAD7aI8VAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAASFBMVEXVR17wv8f////+/v6zvdIzTYYBIWnIEC4sRoKirsj8/P311draYHTIES/WS2LxxMv00NbZWW79/f6qtc0tR4Pyx87XUGb0zdQY2CmSAAAAAWJLR0QCZgt8ZAAAAAd0SU1FB+YDHAMnFn3xeaUAAAMDSURBVHja7d3rUtswFATgJUBT2nJP4f3ftLSQTOvUsc45u+vMcPSDYYZE3i8SkW+ygIvNTLm8uv7CKfsatzNl/3fS5r7efHuv7/uP28mWcIHfP9RkK/gkd7PB/hcl2Qhe4H6A1WQbeJF7AGvJJvAA9y+wkmwBD3H/AevIBvAgdwLebu/uFWQ5+MB9eJxypyIsvYBBFoMD3DfwUhdgkKXg4c78AR594Xt5et6dF3j3/BTh/gHHyJlWloGDrXsAq8kicIL7Bo52iUzHloB3ueTIfU6xVhaA06lRefNq4EJiVCtYAVxKC0YlVnAxKVgVmcDllGBWJgcTEoJdoRBMSQdFpRIwKRlUFZPBtFRQVk4DExNBvQECmJoGjo2UwOQPH45uVADT/73g+KJIgwVfoHAMBUmwZIiEY7BPgUU7QXDsziXAst1cOHbYw2DhgcwIuBwgCJYeqo6BiyFCYPHJiFFwKUgALD/dNA4uhBkGG04oRsBp8ihYz42Ck+RRsOOiQBRcIo+A1Zd94uACeRmsv5aJjbGMdWltaXCDG9zgBjf4nMDbT1Ya3OAGN7jBDW5wgxvc4AY3uMENbnCDG9zgBje4weuC+8pDgxvc4AY3uMHrgSs3ph2Xny9TzMtrDTxfY/LGNB8328JcMnzcfJdmkqHnxm8fVpKh52ZuENeRoefmpgCoyNBzs5M8NGTouflpPAoy9NzKRC0+GXpubSoemww9tzrZkkuGnlufTsskQ89lTJjmkaHncqbEs8jQc1kPPeCQ4dhICUxOA0c3KoKpieD4oiiDiangGAoIYFoyOAZ7CpiUDo7dORKYkhCOHXYamJASjkMyIricFI6Dbiq4mBaO0ypkcCkxHCfO6OAC+fAw3sgbz+thvLHkcJz8loCTrQzH5Q0ROEWGtjOLwYmODf31OtdD8cckR+D7u8lrbh8falzfsgfH5VgDdesawKFWhp7rXbpkiQw91704zWky9Fz/8kOnyNBz11hgap4MPXedJcTmyNBz11ok7v9kKMbdVcEL4/Ivi2RV0elS9jYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMjhUMDM6Mzk6MjIrMDA6MDArMhECAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTI4VDAzOjM5OjIyKzAwOjAwWm+pvgAAAABJRU5ErkJggg==","rateCross":43.5416},{"code":392,"currency":"JPY","name":"Японская йена","flag":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACgCAMAAAAFBRFXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABlVBMVEX////78PPxytPno7Pce5LSVXPLOFvILVLFIknAETu+BjL88/Xtu8fbd4/JM1e9Ai+8AC3XZoHpqrn77vH77/LkmavMPV+9Ay/MPmDkmqz+/f3rtMHTVnS+CDTstcLrssDJMlbHK1DmobL++/zlm63FI0rFJEvlnK3xy9TKNFjIL1TvxM767fDZboi8AS7UXXr56e3qr73BEjzBEz3qsL79+fr23uTKNVnKNln33+XCFT7wxtDuvcm/DTi/Czbst8Tprbu+BzPoprbop7ftvMi9BTHsuMW/DDe/CjXBFD3++vvLOVzZb4jacovrs8D56u766+/VYX3WZH/lna7+/P3GJUvnpLT//v7ILFHHKlDstsPTWHW+CTTkmKrNQGK9BDD78fPrsb/ZcInac4zILlPJMVX88vTxydPyzNXnorLnpbXdfpXSVHLTV3XLO17EH0fFIUjadI3NQWPmn7DJMFXWYn7XZYD67O/acYrCFj/34ebyzdbtucXoqLfADjnCF0D34ufLOl3df5bwxc/GJkz89PbdfZRTpQsdAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+EICgE6EpnTDCQAAAMZSURBVHja7dxnVxNBFIfxCTVEca/SSUIxQhAkSlCaIE1BRAUlCgJSNGJEsYEFOxY+t/hWD0Kyc8+5d/f/+wbP2WR3Z3ZmjAEAAAAAAAAAAAAAAAAAALAukJdfUFhUHCwJhUqCxUWFBfl5Ac/GHjlaesyhfwWPnyjzXm15RWUV7auquqbcS7W14UiUDhCN1NV6Jbe+gQ6l8WTMA7mxU010aM1x9cktpykrrW2qc8+0O5SlxNlzens7kpSDzvNa/72lCcpJov2Cxt6ubspZT6/Cu1UfuZC8qK23f4BcuTSoq3domFwKjWjqHXHINWdUT+/lYbLgypiW3rxxsuKqkjtX1wRZ0qfi6XRtkqzp1vAGcp0suiG/92bCZnCiQ3rvVJKs6pwWHnyLLLstu7ctYTvYEf1sirWSdcWSZ31qiMGM3N7UHY7gJrmX+C6xEDtump3jCb4ndYY+TEzmhQYXcgUvyOwNLHIFR2V+abtPbOIigyv5gpdE/qKr+IKXVwQGrxKjsMDgB5zBDwUGpzmDHwn8Cyc4g501ccGPiVVGXPAT3uB1ccEFvMFPxQU/4w3eEBc8yRv8XFxwI29wWlzwC97gl+KCk7zBE+KCQ7zBwwjGTxo3LTyW8OKBV0sMHjA89O8EwIrfpnh8N4nHO037ym8T8XX41CJANV/wa4m9poIvWOZCHt99EDcRny15MHV+W9Tiu2VLXAvT5G5v4Vl62JwSG2ziHMGbcntNast+b4PgC7w3KnZs9zrCNy+9sR38Vnavme60PAH/TniwCdvdxqNge/x7rw/8/2ZzK16PisMAevts9W5/MCq0DNjpHfholOi3smE69MmoMWpjS/xno8hQ1PX1HTWq9H9x1zs+ZpTJbLvp/Zox6nzbyb23u8soFPue461L6eFDe1ZzGklM1Bu1ynI5QGzKaJbJ8pCprR9GudRMFjN7PzdTRr9DH/M454ljHv+Ynd848LvT4sL8rPGQQHxp+T/ff5dmPHgm76/9D+MtN1611rK+G9lJB5OhUDKY3tnYXc+sGQAAAAAAAAAAAAAAAAAAAOt+AxfWDTEauTLmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA4LTEwVDAxOjU4OjE4KzAwOjAw0fTMgwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOC0xMFQwMTo1ODoxOCswMDowMKCpdD8AAAAASUVORK5CYII=","rateCross":0.2671},{"code":156,"currency":"CNY","name":"Китайский юань","flag":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAdVBMVEXuHCX//wDtACbwPCD81gvuDyb//QD/+wDvKiP3oxTvMiL+7QDxTSD2jRfvLiP0fhv7yAz83Qj95AP2lhf7zQ396Ab4qhP+8wD70Qz+9wDwQyH4rQ/6vA/zax35txDzchv3mxPxXR71dxf2hxb6wxHxVR7zYxzJk5AcAAADSklEQVR4nO2a6ZKqMBCFTeAgsgooIIsLCO//iJfFmXK8GBitwVDVX/nDQqg6J51OuoOrFUEQBLFQkCiflvA+aD6KZ3xaxtukLriTMXxax7vAZr4bMsY/LeRtnCtrMLF4J8jNxoh2dB35rSSiBOCnqA0J0/zzXHpeRY8FY43LvrWxVje5M5+kl0BhWk9DAss31ZixgHPp1y2+ZfbTkCAPamW1Y6X0NpqZZbKj4GcO4KS58hvh5Zr5lVgnjrn8RtDuEyMDDkv+CgWW1xhJJw+4LmtoUGrt6jr1difoNh0Z3aTddldPlXZUE8AoC+msJH5nJJtYf+DM4iSII/1vVf0e1J2Ppiicdj8vGduvBRvPp+DH3si6mCINUDbt3aoMATES5Q5n3RthV+P+cjKs1Ar6ibhzJEgRI/TUO24+WHR/0S+HH7XVm++rBEZWScZG0IInU8cxkrq3ns2reRBw1xT6iKvn+QKesR3X63Mxo+Kn8GonCEdoCPuslDWFGSQp6mGcn/kwS/G2zYOtVEsvLsPTa6uMDDVyYWM8P1zJ1v/ZiDaSTJnfAN0+PPjw5KugJoH6pxNVmOUSA+tnQPyF+ljxh6UrWkA/OwjfP+RIKNXCOhlUj8vWTv7OfAge3vRr/m/mFty/l/Y79FvlG52tTOu/BhOM8FiyVELd7+1+DujubW5NaJh0cydXKqHr9bRjV1rxpA/P80Pg/hnOeXHojopl6BF7jG0jfP/VfMMJ290xEA62U9i2vWPadROmhSxOUDXC48t3BLBq34N4QiN68bUssGPy9xKnAbvZN34cG8JquhRx8QvjdlYxUuvPCTy/fhh+IGjKX/FTfTUwctesKNlAYvNTOPZcFxJPopdXzmCpC2Mkhw2TbZqW/yLNzHoR1FEBGNdUorn1EiguvDuHWXpEvl6PLN7H8skWHwNDaQ9WztHSs3ulb9OKnw7m4o3AZWvPHCnClkH3ktHMFSw8TVB1ZxSamuaflvIesPszikNWf1rKW/CmC247F2MBfw8SgYsXH8u9VIX7S6DKm1jYyzfSl1X69rzoefUNqsl/8ZAcyHJmQhAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDEXPwDQU0hQ0OOCQsAAAAASUVORK5CYII=","rateCross":5.4022},{"code":203,"currency":"CZK","name":"Чешская крона","flag":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACgBAMAAADA9fxWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVYfKTn7PL///8RRX4hUYegtcsiQXaVJDvXFBpTNV3GGCI0laGJAAAAAWJLR0QCZgt8ZAAAAAd0SU1FB+YDGgENC1dzUuYAAAJfSURBVHjaxdHRTQNBDEVR0gIlUAFSEBIF0ABNuAVKeDW4AspEgYVkN7M7Y4/tdxs4H/fh9MTp4eWDBJ+fH0nw+Z0Fn08smLL5AlM2/8CMzb8wYfMC129e4PrNf3D55n+4evMVLt58hYs338C1m2/h0s0ruHLzCq7cvIYLN2/gus1buGzzFi7bfAdXbb6HizY34JrNDbhmcwsu2dyEKza34YLNbbhg8w6cv3kPTt+8C2dv3oWzN+/DyZsP4NzNR3Dq5iM4dfMhnLn5GE7c3IHzNnfgvM09OG1zF87a3IeTNvfhpM0DcM7mEThl8xCcsXkIztg8BidsHoTjN4/C4ZtH4fDNw3D05nE4eLMBjt1sgGM3W+DQzSY4crMNDtxsgwM3G+G4zVY4bLMZjtpshqM22+GgzQ44ZrMHDtnsgUM2u+CIzT44YLMTnt/shOc3e+HpzW54drMfntzshyc3T8Bzm2dgwUQT8NsXB379BAdWcGABB54b7IcnB/thBQcWcODpwU54frATVnBgAQeOGOyBQwZ7YAUHFnDgoMFmOGqwGVZwYAEHjhtsgwMH22AFBxZw4NDBBjh2sAFWcGABB44ePAqHDx6FFRxYwIETBg/BGYOHYAUHFnDgnMF9OGlwH1ZwYAEHThvcgfMGd2AFBxZw4MzBR3Dq4CNYwYEFHDh58C6cPXgXVnBgAQfOH9yGCwa3YQUHFnDgksENuGZwA1ZwYAEHrhq8hcsGb2EFBxZw4MLBK7hy8ApWcGABB64dfIWLB19hBQcWcODywQtcP3iBFRxYwIEZgy8wZfAFVo6Lb2bxc2ONEe4iAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAzLTI2VDAxOjEzOjExKzAwOjAwm8VmlAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMy0yNlQwMToxMzoxMSswMDowMOqY3igAAAAASUVORK5CYII=","rateCross":1.5253},{"code":376,"currency":"ILS","name":"Израильский шекель","flag":"data:image/png;base64,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","rateCross":11.062},{"code":985,"currency":"PLN","name":"Польский злотый","flag":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACWAQMAAADaNpeWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEX////cFDzQkLT4AAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UGBgcVL7ldRyUAAAAiSURBVFjD7ckxAQAACMCg9S+tDSwgvBQAADUnrbXWWusfvcZOwa9o/HkxAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA2LTA2VDA3OjIxOjQ3KzAwOjAwXsmEFgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNi0wNlQwNzoyMTo0NyswMDowMC+UPKoAAAAASUVORK5CYII=","rateCross":7.9549},{"code":949,"currency":"TRY","name":"Турецкая лира","flag":"data:image/png;base64,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","rateCross":2.0581}]'
);
export type InitialStateType = {
  currency: Array<CurrencyType>;
  windowsWithCurrency: Array<WindowsWithCurrencyType>;
};
const initialState: InitialStateType = {
  currency: [],
  windowsWithCurrency: [],
};
const slice = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {
    setCurrencyAC(
      state,
      action: PayloadAction<{ currency: Array<CurrencyType> }>
    ) {
      state.currency = action.payload.currency;
    },
    setWindowsWithCurrencyAC(
      state,
      action: PayloadAction<{ newArray: Array<WindowsWithCurrencyType> }>
    ) {
      state.windowsWithCurrency = action.payload.newArray;
    },
    addWindowsWithCurrencyAC(
      state,
      action: PayloadAction<{ object: WindowsWithCurrencyType }>
    ) {
      state.windowsWithCurrency.push(action.payload.object);
    },
    deleteWindowsWithCurrencyAC(
      state,
      action: PayloadAction<{ index: number }>
    ) {
      state.windowsWithCurrency.splice(action.payload.index, 1);
    },
    setSelectedPageWindowsWithCurrencyAC(
      state,
      action: PayloadAction<{
        indexWindow: number;
        index: number;
        currency: string;
      }>
    ) {
      const { indexWindow, index, currency } = action.payload;
      state.windowsWithCurrency[indexWindow].ratio =
        state.currency[index].rateBuy || state.currency[index].rateCross || 1;
      state.windowsWithCurrency[indexWindow].selectedCurrency = {
        index,
        currency,
      };
    },
  },
});
export const CurrencyReducer = slice.reducer;

export const {
  setCurrencyAC,
  setWindowsWithCurrencyAC,
  addWindowsWithCurrencyAC,
  deleteWindowsWithCurrencyAC,
  setSelectedPageWindowsWithCurrencyAC,
} = slice.actions;

export const setCurrencyTC = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<Array<CurrencyResponseType>>(
      "https://api.monobank.ua/bank/currency"
    );
    const newArray: Array<CurrencyType> = [];
    response.data.forEach((currencyRes: CurrencyResponseType) => {
      if (newArray.length === 0) {
        const currencyCopy = {
          ...currency.get(String(currencyRes.currencyCodeB)),
        } as CurrencyType;
        newArray.push(currencyCopy);
      }
      if (currency.has(String(currencyRes.currencyCodeA))) {
        const currencyCopy = {
          ...currency.get(String(currencyRes.currencyCodeA)),
        } as CurrencyType;
        if (currencyRes.rateCross) {
          currencyCopy.rateCross = currencyRes.rateCross;
        } else {
          currencyCopy.rateBuy = currencyRes.rateBuy;
          currencyCopy.rateSell = currencyRes.rateSell;
        }
        let overlap = 0;
        newArray.forEach((el) => {
          if (el.code === currencyCopy.code) {
            overlap++;
          }
        });
        if (overlap === 0) {
          newArray.push(currencyCopy);
        }
      }
    });
    dispatch(setCurrencyAC({ currency: newArray }));
    createWindowsWithCurrencyTC(newArray)(dispatch);
  } catch {
    dispatch(setCurrencyAC({ currency: defaultCurrency }));
    createWindowsWithCurrencyTC(defaultCurrency)(dispatch);
  }
};
export const createWindowsWithCurrencyTC =
  (currency: Array<CurrencyType>) => (dispatch: Dispatch) => {
    const newArray: Array<WindowsWithCurrencyType> = [];
    currency
      .slice()
      .splice(0, 2)
      .forEach((currency, index) => {
        const object = {
          value: "",
          ratio: currency.rateBuy || currency.rateCross || 1,
          selectedCurrency: { index, currency: currency.currency },
        } as any;
        newArray.push(object);
      });
    dispatch(setWindowsWithCurrencyAC({ newArray }));
  };
export const addWindowsWithCurrencyTC =
  (
    currency: Array<CurrencyType>,
    windowsWithCurrency: Array<WindowsWithCurrencyType>
  ) =>
  (dispatch: Dispatch) => {
    const newArray = new Map();
    windowsWithCurrency.forEach((el) => {
      newArray.set(el.selectedCurrency.currency, el.selectedCurrency.currency);
    });
    for (let i = 0; i < currency.length; i++) {
      if (!newArray.has(currency[i].currency)) {
        const ratio =
          windowsWithCurrency[0].ratio /
          (currency[i].rateBuy || currency[i].rateCross || 1);
        const object = {
          value: windowsWithCurrency[0].value
            ? String((Number(windowsWithCurrency[0].value) * ratio).toFixed(2))
            : "",
          ratio: currency[i].rateBuy || currency[i].rateCross || 1,
          selectedCurrency: { index: i, currency: currency[i].currency },
        } as any;
        dispatch(addWindowsWithCurrencyAC({ object }));
        break;
      }
    }
  };
export const setValuesWindowsWithCurrencyTC =
  (
    windowsWithCurrency: Array<WindowsWithCurrencyType>,
    value: string,
    indexWindow: number
  ) =>
  (dispatch: Dispatch) => {
    if (value) {
      const newArray: Array<WindowsWithCurrencyType> = [];
      windowsWithCurrency.forEach((el) => {
        const object = {
          ...el,
          selectedCurrency: { ...el.selectedCurrency },
        };
        newArray.push(object);
      });
      newArray[indexWindow].value = value;
      newArray.forEach((el: any, index: number) => {
        if (index !== indexWindow) {
          const ratio =
            windowsWithCurrency[indexWindow].ratio /
            windowsWithCurrency[index].ratio;
          newArray[index].value = String((Number(value) * ratio).toFixed(2));
        }
      });
      dispatch(setWindowsWithCurrencyAC({ newArray }));
    } else {
      const newArray: Array<WindowsWithCurrencyType> = [];
      windowsWithCurrency.forEach((el) => {
        const object = {
          ...el,
          value: "",
          selectedCurrency: { ...el.selectedCurrency },
        };
        newArray.push(object);
      });
      dispatch(setWindowsWithCurrencyAC({ newArray }));
    }
  };
