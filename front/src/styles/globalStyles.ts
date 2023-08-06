import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --color-primary:            #4D6FFF;
    --color-primary-focus:      #2E4DFF;
    --color-primary-negative:   #1C2A3FFF;
    --color-secondary:          #6B8FFF;

    --grey-0:                   #F0F2F5;
    --grey-1:                   #AEB5C3;
    --grey-2:                   #8795A1;
    --grey-3:                   #606F7B;
    --grey-4:                   #394954;
    --grey-50:                  #7E8A97;
    --grey-100:                 #333333;
    --color-white:              #ffffff;

    --success:                  #38A169;
    --negative:                 #E53E3E;

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        list-style: none;
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }

    dialog{
        display: unset;
        position: unset;
    }

    body{
    background-color: var(--grey-0);
    color: var(--grey-4);
    }

    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    }
    button{
        cursor: pointer;
    }

    dialog{
        display: unset;
        position: unset;
    }
}
`;
