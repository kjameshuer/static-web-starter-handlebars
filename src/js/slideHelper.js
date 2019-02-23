export const afterChange = $ => {
    const slide = getSlideItems($);
    addClassToSlideItems($,slide);    
}
export const beforeChange = $ => {
    const slide = getSlideItems($);
    removeClassFromSlideItems($,slide)
}
const addClassToSlideItems = ($,slide)=>{
    $(slide.slideTextHolder).addClass('animate');
    $(slide.slideTitle).addClass('animate');
    $(slide.slideImage).addClass('animate');
    $(slide.slideText).addClass('animate');
}
const removeClassFromSlideItems = ($,slide) =>{
    $(slide.slideTextHolder).removeClass('animate');
    $(slide.slideTitle).removeClass('animate');
    $(slide.slideImage).removeClass('animate');
    $(slide.slideText).removeClass('animate');
}
const getSlideItems = $ =>{
    const slide = $($('.slick-current')[0]);
    const slideImage = slide.find('.slide-background')[0];
    const slideTitle = slide.find('.slide-title')[0];
    const slideText = slide.find('.slide-sub-text')[0];
    const slideTextHolder = slide.find('.slide-text-container')[0];
    return {
        slide,
        slideImage,
        slideTitle,
        slideText,
        slideTextHolder
    }
}