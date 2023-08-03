import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --color-primary:            #FF577F;
    --color-primary-focus:      #FF427F;
    --color-primary-negative:   #59323F;
    --color-secondary:          #EB5757;

    --grey-0:                   #F8F9FA;
    --grey-1:                   #868E96;
    --grey-2:                   #343B41;
    --grey-3:                   #212529;
    --grey-4:                   #121214;
    --grey-50:                  #828282;
    --grey-100:                 #333333;
    --color-white:              #ffffff;

    --sucess:                   #3FE864;
    --negative:                 #E83F5B;


body{
    background-color: var(--grey-4);
    color: var(--grey-0);
    }
}
`;
