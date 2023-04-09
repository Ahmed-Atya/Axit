$( function (){
	
	$(window).scroll(function() {
		
	  if($(window).scrollTop() >= $('.navbar').height()){
		  
		  
		$('.navbar').addClass('scrolled')  
		   
	  }else{
		  
		  $('.navbar').removeClass('scrolled') 
		  
	  }
		  
		
		
		
		
	});
	$('.tab-switch li').click(function() {
		
		
		$(this).addClass('active').siblings().removeClass('active');
		
		$('.tabs .data-tabs > div ').hide();
		$($(this).data('class')).show();
		
		
	});
	
   $(window).load(function() {
	
	$('.spinner').fadeOut(2000,function() {
		
		
		
		$(this).parent().fadeOut(2000,function() {
			$(this).remove();
			
		});
		
		
		
	});
	
	
	
	
	
});

	
	
});