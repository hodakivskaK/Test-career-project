export const brandsStyles = {
  singleValue: styles => ({
    ...styles,
    color: "#121417",
    fontFamily: "Manrope, sans-serif",
    fontSize: "18px",
    fontWeight: "500",

  }),
    valueContainer: styles => ({
    ...styles,
    padding: 0,
    display:"flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "18px",
  
  }),
  control: styles => ({
    ...styles,
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '14px',

    transition: "0.2s",
    backgroundColor: '#F7F7FB',
    color: '#121417',
      width: '224px',
      height: '48px',
    '&:hover': {
      borderColor: '#0b44cd',
      boxShadow: 'none',
    },
    '&:focus': {
      borderColor: '#0b44cd',
      boxShadow: 'none',
    },
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    transition: '500ms ease',
    color: isFocused ? '#0b44cd' : '#121417',
    '&:hover': {
      color: '#0b44cd',
      transform: "rotate(180deg)",
    },
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? '#121417' : '#12141733',
    fontSize: '14px',
    backgroundColor: 'transparent',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '400',
    cursor: 'pointer',
    lineHeight: '18px',
    transition: '200ms ease',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#121417',
      transform: 'scale(1.05)',
    },
  }),
  menuList: styles => ({
    ...styles,
    height: '100%',
    marginBottom: '8px',
    backgroundColor: '#FFFFFF',
    borderRadius: '14px',
    padding: '14px',
    margin: '-1px',
    boxSizing: 'content-box',
      width: '200px',
  }),
};

// PRICESTYLES
export const priceStyles = {
     singleValue: styles => ({
    ...styles,
    color: "#121417",
    fontFamily: "Manrope, sans-serif",
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
    
  }),
    valueContainer: styles => ({
    ...styles,
    padding: 0,
    display:"flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "18px",
  
  }),
  control: styles => ({
    ...styles,
    outline: 'none',
    boxShadow: 'none',
    border: "none",
    borderRadius: '14px',

    transition: "0.2s",
    backgroundColor: '#F7F7FB',
    color: '#121417',
      width: '130px',
      height: '48px',

    '&:hover': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? '#0b44cd' : '#121417',
    transition: '500ms ease',
    '&:hover': {
    color: '#0b44cd',
    transform: "rotate(180deg)",
    },
    
  }),
  option: (styles, { isFocused, dropdownIndicator }) => ({
    ...styles,
    color: isFocused ? '#121417' : '#12141733',
    fontSize: '14px',
    backgroundColor: 'transparent',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '400',
    cursor: 'pointer',
    lineHeight: '18px',
    transition: '200ms ease',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#121417',
      transform: 'scale(1.05)',
    },
  }),
  menuList: styles => ({
    ...styles,
    
    height: '100%',
    marginBottom: '8px',
    backgroundColor: '#FFFFFF',
    borderRadius: '14px',
    padding: '14px',
    boxSizing: 'content-box',
    width: '100px',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '14px',
    width: '100px',
    backgroundColor: 'transparent',
  }),
}