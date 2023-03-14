const styles = {
    boxWidth: "xl:max-w-[2080px] w-full",

    heading1: "font-poppins font-semibold xs:text-[42px] text-[46px] xs:leading-[76.8px] leading-[66.8px] w-full ",
    heading2: "font-poppins font-semibold xs:text-[42px] text-[38px] xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal xs:text-[16px] text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

 bblue1: 'text-[#def9fa]',
 bblue2: "text-[#bef3f5]",
 bblue3: 'text-[#9dedf0]',
 bblue4: "text-[#7de7eb]",
 bblue5: "text-[#5ce1e6]",
 bblue6: "text-[#33bbcf]",

 pink1: "text-[#f4c4f3]",
 pink2: "text-[#fc67fa]",

 nav: 'font-poppins font-normal cursor-pointer text-[18px] bg-gray-gradient text-[#9dedf0] rounded-[10px] px-[8px] hover:bg-[#f4f4f4]',
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;