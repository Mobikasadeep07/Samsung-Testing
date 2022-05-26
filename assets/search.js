    
      
  $(document).ready(function() {
    
     
  var search_value =   $(".search-input").on("change paste keyup", function() {
      var search_term = $(this).val();
      console.log(search_term);
//        window.location.href = 'https://vou1t6lx9gm370kz-60184887543.shopifypreview.com/pages/search-fridge?'+search_term;
   });
     
    console.log(search_value);
    
    $('.search-form .btn').on("click",function(){
      var search_term =  $(".search-input").val();
      console.log('search term: '+search_term);

       console.log('submitted click');
//       return false;
      
//        alert('https://vou1t6lx9gm370kz-60184887543.shopifypreview.com/pages/search-fridge?'+search_value);
//       $('.search-form').attr('action', '/pages/search-fridge?'+search_term);
        
//       window.location.href = 'https://vou1t6lx9gm370kz-60184887543.shopifypreview.com/pages/search-fridge?'+search_term;
//        window.location.replace('https://vou1t6lx9gm370kz-60184887543.shopifypreview.com/pages/search-fridge?'+search_term);
       
      
      setTimeout(function(){
            //code goes here
      
      }, 2000); 
      
      
    });
    
    
  
    
    
    var model_number = $('.search-input').val().trim();
    var page_url      = window.location.href; 
    const myArray = page_url.split("?q1=");
    var search_query =  myArray[1];
    
     console.log('Search Query 1: '+search_query);
    
    $('.search-form').attr('action', '/pages/search-fridge?');
    
   
    function destroyCarousel() {
    if ($('.carousel-search-diagrams').hasClass('slick-initialized')) {
        $('.carousel-search-diagrams').slick('unslick');
    }
}

    if ($(".carousel-search-diagrams ")[0]){
      function applySlider() {
        $('.carousel-search-diagrams').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows:true,
          dots: false,
          infinite: false,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]

            });


            }
            
       }
            
    var searched_string = "";
    if(search_query) {
     var searched_string = search_query.replaceAll('%20', ' ').replaceAll('%2F', '/').split("&usf")[0]; 
    }
//    alert(searched_string);
            
           $.ajax({
     type: 'GET',

     url : 'https://samsungpartsapi.mobikasa.net/api/v1/admin/searchDiagram?searchValue='+search_query, 
     dataType: 'json',
     success: function(data) { 
        console.log(data);
//         destroyCarousel();
         $.each(data, function(i, item) {
          if (item.diagram) {
            console.log(item.diagram.length);
             $('.diagram-count').html(item.diagram.length);
            var search_cnt = item.diagram.length ;
          
            if(search_cnt == 0){
//                 alert(search_cnt);
              setTimeout(function() {
                $('.searched-result, .search-with-diagram').hide();
              }, 50);
              
            }
            else{
                 $('.searched-result,.search-with-diagram').show();
            }
            
             $('.search-query-diagram').html(searched_string);
               $('.searched-result, .heading-within').show();
             
            item.diagram.forEach(brands => {
             var items_array = brands;
             
//                var slug = items_array.slug ;
//              var diagram_url = 'https://samsungparts.mobikasa.net/parts-data/?s='+slug ;
              
               $.each(items_array.images, function(key,value) {
//                   console.log(items_array.labels[key].label);
                  var diagram_url = data.data.baseUrl+items_array.images[key];
       
                 if(diagram_url!= null) {
//                        console.log(diagram_url);   
//                     console.log(items_array.modelNumber);
                  var diagramName = "<span>"+items_array.diagramName+"</span>" ;
                   var modelNumber = items_array.modelNumber ;
                 
                   var diagram_name_url = items_array.diagramName ;
                   diagram_name_url = diagram_name_url.replace(/\s+/g, '-');
//                    console.log(diagram_name_url);
                   
                var img = "<a target='_blank' href='https://samsungparts.mobikasa.net/parts-data/?s="+items_array.slug+"'><img src="+diagram_url+"></a>"; 
                   
//                    console.log(img);
//                    console.log(modelNumber);
                   var diagram_content = "<div class='item'><div class='items-inner'>"+img + diagramName+"</div></div>" ;
//                    console.log(diagram_content);
                   $('.diagram-img-api').append(diagram_content);
                   // apply slick slider again
//                    $('.diagram-img-api').slick();
                   
                 }
                 
                });
              
              
            });
            
            
          }
        });
        if ($(".carousel-search-diagrams ")[0]){
        applySlider();
        }
          
      }
      });
//     End of Diagram APi search Page
    
//     Filter part Type

 if(search_query) {
    $.ajax({
     type: 'GET',
//      url: 'https://svc-2-usf.hotyon.com/search?q='+search_value+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6',
     url : 'https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10', 
     dataType: 'json',
     success: function(data) { 
     
        console.log(data);
       
         $.each(data, function(i, item) {
          if (item.facets) {
            item.facets.forEach(brands => {
             var items_array = brands;
//               console.log(items_array.facetName);
               
              if (items_array.facetName == 'metafield:my_fields.part_type') {
//               console.log(items_array.title);
//                 console.log(items_array.facetName.labels);
//                  console.log(items_array.labels);
                
                $.each(items_array.labels, function(key,value) {
//                   console.log(items_array.labels[key].label);
                  var value_new = items_array.labels[key].label;
                      
//                       console.log(value_new);
                    var option1 = "<option value='https://svc-2-usf.hotyon.com/search?q="+search_query+"&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&locale=en&getProductDescription=0&facetFilters=%7B%221999068082%22%3A%5B%22metafield%3Amy_fields.part_type%22%2C%5B%22"+value_new+"%22%5D%5D%7D&skip=0&take=40'>"+value_new+"</option>"; 
                      
                  $('#part_type_options').append(option1);
                });
                     
              }
        
              
              
            });
            $('#part_type_options').append('<option value="https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10">All</option');
          }
           
        });
       
     }
      
    });
 }




//     Search App Api product listing 
    
     var task_names2 = [];
   
     var ajax_urls = [];
    
    var search_url = 'https://svc-2-usf.hotyon.com/search?q1='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=40';
    
     console.log(search_url);
    
    console.log('Search Query: '+search_query);
     
    if(search_query) {
    $.ajax({
     type: 'GET',
//      url: 'https://svc-2-usf.hotyon.com/search?q='+search_value+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6',
     url : 'https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10', 
     dataType: 'json',
     success: function(data) { 
     
        console.log(data);
       
      var sort_options= '<option value="https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10">Relevance</option><option value="https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10&sort=title">Title A-Z</option><option value="https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10&sort=-title">Title Z-A</option><option value="https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10&sort=date">Date: Old to New</option><option value="https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10&sort=-date">Date: New to Old</option><option value="https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10&sort=price">Price: Low to High</option><option value="https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=0&take=10&sort=-price">Price: High to Low</option>';
       $('.search_model_number #sort-by').html(sort_options);
        $('.search_model_number #sort-by').show();
//        Ajax pagination urls 
         $.each(data, function(i, item) {
                console.log(item.total);
          var total_item = item.total;
          
          for (var i = 0; i < item.total; i += 10) {
            //        console.log('Value of i: https://svc-2-usf.hotyon.com/search?q=&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip='+i+'&take=200');
            var api_url = 'https://svc-2-usf.hotyon.com/search?q='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip='+i+'&take=10';
            ajax_urls.push(api_url);
          }
           
          if (item.items) {
            item.items.forEach(brands => {
             var items_array = brands;
//               console.log(brands);
                task_names2.push(brands); 
            

            });
          }
        });
       
//                  console.log(ajax_urls);
       
//  End of url's      
       
//            console.log(search_query);
//            $('#cate-col-data .usf-is__list').empty();
       
       Number.prototype.countDecimals = function () {

         if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

         var str = this.toString();
         if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
           return str.split("-")[1] || 0;
         } else if (str.indexOf(".") !== -1) {
           return str.split(".")[1].length || 0;
         }
         return str.split("-")[1] || 0;
       }

// console.log('Decimal counted'+2.54.countDecimals());

       $('.search_pagination .pagination__list').append('<li style="display:none;" class="pagination__item pagination-prev pagination__item-arrow link motion-reduce"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">'+
                                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">'+
                                                        '</path></svg></li>');
          
        for (var i = 0; i < ajax_urls.length; i++) { 
         
          var page_no = i+1;
//            console.log(page_no+ajax_urls[i]);
          var page_no_block = '<li class='+page_no+'><a class="pagination__item link" href="'+ajax_urls[i]+'">'+page_no+'</a></li>';
             $('.search_pagination .pagination__list').append(page_no_block);
        }
       $('.search_pagination .pagination__list').append('<li class="pagination__item pagination-next pagination__item-arrow link motion-reduce"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">'+
                                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">'+
                                                        '</path></svg></li>');
        $(".search_pagination li:nth-child(2) a").addClass("pagination__item--current");
       
      
                for (var i = 0; i < task_names2.length; i++) { 
//                   console.log(search_query);
//                     console.log(task_names2[i].title);
             
//                   $('#seeMore').show();
//                    $(".semi-inner").slice(0,5).css('display','flex');
//                    $(".semi-inner").css('display','flex');
                  
//                     console.log('Matched');
//                     console.log(task_names2[i]);
                    var filtered_array = task_names2[i];
                    
                   
                   var var_price ="&nbsp;";
                  var var_price_cent ="&nbsp;";
                   var var_inventory ="&nbsp;";
                  
                   var var_id ="&nbsp;";
                  
                  var part_type = [];
                  
                  $.each(task_names2[i].options, function(key,value) {
                         
                   
                    $(task_names2[i].options[key].values).each(function(index, val) {
                  var  option_name = task_names2[i].options[key].values[index];
                  var  option_index = index;
                       
                     
                      
                       if (option_name.includes("Retail"))
                       {
//                            console.log('Opt Name : '+option_index+':'+option_name);
                         
                        
                           var_price_cent = task_names2[i].variants[option_index].price.countDecimals();
                         
//                           console.log('Decimals: '+var_price_cent);
                         
                         if(var_price_cent==1) {
                           //                             alert('1 cents');
                           var_price = '$'+task_names2[i].variants[option_index].price+'0';
                         }
                         else if(var_price_cent<1) {
                           //                          alert('0 cents');
                           var_price = '$'+task_names2[i].variants[option_index].price+'.00';
                         }
                         
                        
                         
                        
                         var_inventory = task_names2[i].variants[option_index].available;
                         
                         if (var_inventory>0)
                         {
                         var_inventory = 'ADD TO CART';
                         }
                         else{
                         var_inventory = 'Sold out';
                         }
//                            console.log('Price var: '+var_price);
                            var_id = task_names2[i].variants[option_index].id;
//                              console.log('var id: '+var_id);
                       }
                            
                            });
                  });
                  
                    
                  

                  var val_meta_col ="&nbsp;";
                  var val_meta_col1 ="&nbsp;";
                  var val_meta_col2 ="&nbsp;";
                   var val_meta_col3 =" ";
                  
                 $.each(task_names2[i].metafields, function(key,value) {
                     var metafield_key = task_names2[i].metafields[key].key;
                     var metafield_value = task_names2[i].metafields[key].value;
                     if (metafield_key == 'collections' ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col =  metafield_value;
//                        console.log(val_meta_col);
                     }
                   
                   if (metafield_key == "specification" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col1 =  metafield_value;
//                        console.log(val_meta_col1);
                     }
                    if (metafield_key == "stock_status" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col2 =  metafield_value;
//                        console.log(val_meta_col2);
                     }
                    if (metafield_key == "part_type" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col3 =  metafield_value;
//                        console.log(val_meta_col3);
                      var option1 = "<option value='"+val_meta_col3+"'>"+val_meta_col3+"</option>"; 
                      
//                   $('.sort-right-results .sort-by').append(option1);
                      
                     }
                   
                  });
              
                  
         
                  
                  var image_url ="https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_149x.gif";
                  
                    $.each(task_names2[i].images, function(key,value) {
                          image_url = task_names2[i].images[0].url;
                    });
                  
//                   console.log("Image url : "+image_url);
                  
//                   console.log('collections meta : '+val_meta_col);
                      
                    $('.search-fridge-mainn .inner-section').append('<span class="semi-inner  '+val_meta_col3+'" ><div class="left-image">'+
                     '<img src="'+image_url+'" class="usf-img">'+
                  '</div>'+
                 '<div class="right-desc"><h3>'+task_names2[i].title + '</h3><ul>'+
             '<li><b>Description:</b>'+val_meta_col+'</li>'+
            '<li><b>Specifications:</b> '+val_meta_col1+'</li>'+
            '<li><b>Availability:</b>'+val_meta_col2+'</li>'+
            '</ul>'+
            '<h3>'+var_price+'</h3>'+                                   
             '<div class="shop-button">'+
            '<a href="/products/'+task_names2[i].urlName+'">VIEW</a>'+
            '<a class="add-to-cart-col   AH59-10008C_Retail '+var_inventory+'" data-val="'+var_id+'" href="#">'+var_inventory+'</a>'+
          '</div></div></span>');
                      
                     
                }
       
       
             
       
     }
     
      });
    }
    else{
     $('.search-fridge-mainn .inner-section').append('<p>No Data Found....!!!</p>');
    
    }





     $(document).on("click", ".search_pagination a", function (event) {
       $('.filter-loading').fadeIn();
       setTimeout(function(){
         if ($('.search_pagination li:nth-child(2) a').hasClass("pagination__item--current")) {
//            alert('test');
           $('.search_pagination li:nth-child(1)').hide();
         }
       }, 150); 
      
       
       
         var task_names3 = [];
       

      
       
       $(".search_pagination a").removeClass("pagination__item--current");
       $(this).addClass('pagination__item--current');
       
       
      event.preventDefault();
       var paged_products = $(this).attr('href');
       
     console.log(paged_products);
       
       var part_sortaz = paged_products+'&sort=title';
       var part_sort = paged_products+'&sort=-title';

       var part_sorton = paged_products+'&sort=date';
       var part_sortno = paged_products+'&sort=-date';
       var part_sortplh = paged_products+'&sort=price';
       var part_sortphl = paged_products+'&sort=-price';

       $('.search_model_number #sort-by').html('<option value='+paged_products+'>Relevance</option><option value='+part_sortaz+'>Title: A-Z</option><option value='+part_sort+'>Title: Z-A</option><option value='+part_sorton+'>Date: Old to New</option><option value='+part_sortno+'>Date: New to Old</option><option value='+part_sortplh+'>Price: Low to High</option><option value='+part_sortphl+'>Price: High to Low</option>');

       
      if(search_query) {
    $.ajax({
     type: 'GET',
//      url: 'https://svc-2-usf.hotyon.com/search?q='+search_value+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6',
     url : paged_products, 
     dataType: 'json',
     success: function(data) { 
     
        console.log(data);
           $('.search-fridge-mainn .inner-section').empty();
       
//        Ajax pagination urls 
         $.each(data, function(i, item) {
                console.log(item.total);
          var total_item = item.total;
          
//           for (var i = 0; i < item.total; i += 40) {
//             //        console.log('Value of i: https://svc-2-usf.hotyon.com/search?q=&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip='+i+'&take=200');
//             var api_url = 'https://svc-2-usf.hotyon.com/search?q1='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip='+i+'&take=40';
//             ajax_urls.push(api_url);
//           }
           
          if (item.items) {
            item.items.forEach(brands => {
             var items_array = brands;
//               console.log(brands);
                task_names3.push(brands); 
            

            });
          }
        });
       
//                  console.log(ajax_urls);
       
//  End of url's      
       
//            console.log(search_query);
//            $('#cate-col-data .usf-is__list').empty();
       
       Number.prototype.countDecimals = function () {

         if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

         var str = this.toString();
         if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
           return str.split("-")[1] || 0;
         } else if (str.indexOf(".") !== -1) {
           return str.split(".")[1].length || 0;
         }
         return str.split("-")[1] || 0;
       }


       
             console.log(task_names3.length);
       
                for (var i = 0; i < task_names3.length; i++) { 
//                   console.log(search_query);
//                     console.log(task_names2[i].title);
             
//                   $('#seeMore').show();
//                    $(".semi-inner").slice(0,5).css('display','flex');
//                    $(".semi-inner").css('display','flex');
                  
//                     console.log('Matched');
//                     console.log(task_names2[i]);
                    var filtered_array = task_names3[i];
                    
                   
                   var var_price ="&nbsp;";
                  var var_price_cent ="&nbsp;";
                   var var_inventory ="&nbsp;";
                  
                   var var_id ="&nbsp;";
                  
                  var part_type = [];
                  
                  $.each(task_names3[i].options, function(key,value) {
                         
                   
                    $(task_names2[i].options[key].values).each(function(index, val) {
                  var  option_name = task_names2[i].options[key].values[index];
                  var  option_index = index;
                       
                     
                      
                       if (option_name.includes("Retail"))
                       {
//                            console.log('Opt Name : '+option_index+':'+option_name);
                         
                        
                           var_price_cent = task_names2[i].variants[option_index].price.countDecimals();
                         
//                           console.log('Decimals: '+var_price_cent);
                         
                         if(var_price_cent==1) {
                           //                             alert('1 cents');
                           var_price = '$'+task_names2[i].variants[option_index].price+'0';
                         }
                         else if(var_price_cent<1) {
                           //                          alert('0 cents');
                           var_price = '$'+task_names2[i].variants[option_index].price+'.00';
                         }
                         
                        
                         
                        
                         var_inventory = task_names2[i].variants[option_index].available;
                         
                         if (var_inventory>0)
                         {
                         var_inventory = 'ADD TO CART';
                         }
                         else{
                         var_inventory = 'Sold out';
                         }
//                            console.log('Price var: '+var_price);
                            var_id = task_names2[i].variants[option_index].id;
//                              console.log('var id: '+var_id);
                       }
                            
                            });
                  });
                  
                    
                  

                  var val_meta_col ="&nbsp;";
                  var val_meta_col1 ="&nbsp;";
                  var val_meta_col2 ="&nbsp;";
                   var val_meta_col3 =" ";
                  
                 $.each(task_names3[i].metafields, function(key,value) {
                     var metafield_key = task_names3[i].metafields[key].key;
                     var metafield_value = task_names3[i].metafields[key].value;
                     if (metafield_key == 'collections' ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col =  metafield_value;
//                        console.log(val_meta_col);
                     }
                   
                   if (metafield_key == "specification" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col1 =  metafield_value;
//                        console.log(val_meta_col1);
                     }
                    if (metafield_key == "stock_status" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col2 =  metafield_value;
//                        console.log(val_meta_col2);
                     }
                    if (metafield_key == "part_type" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col3 =  metafield_value;
//                        console.log(val_meta_col3);
                      var option1 = "<option value='"+val_meta_col3+"'>"+val_meta_col3+"</option>"; 
                      
                  $('.sort-right-results .sort-by').append(option1);
                      
                     }
                   
                  });
              
                  
         
                  
                  var image_url ="https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_149x.gif";
                  
                    $.each(task_names3[i].images, function(key,value) {
                          image_url = task_names3[i].images[0].url;
                    });
                  
//                   console.log("Image url : "+image_url);
                  
//                   console.log('collections meta : '+val_meta_col);
                  
                  
                    $('.search-fridge-mainn .inner-section').append('<span class="semi-inner  '+val_meta_col3+'" ><div class="left-image">'+
                     '<img src="'+image_url+'" class="usf-img">'+
                  '</div>'+
                 '<div class="right-desc"><h3>'+task_names3[i].title + '</h3><ul>'+
             '<li><b>Description:</b>'+val_meta_col+'</li>'+
            '<li><b>Specifications:</b> '+val_meta_col1+'</li>'+
            '<li><b>Availability:</b>'+val_meta_col2+'</li>'+
            '</ul>'+
            '<h3>'+var_price+'</h3>'+                                   
             '<div class="shop-button">'+
            '<a href="/products/'+task_names3[i].urlName+'">VIEW</a>'+
            '<a class="add-to-cart-col   AH59-10008C_Retail '+var_inventory+'" data-val="'+var_id+'" href="#">'+var_inventory+'</a>'+
          '</div></div></span>');
                      
                     
                }
       
       
             $('.filter-loading').fadeOut();
       
     }
     
      });
    }
    else{
//      $('.search-fridge-mainn .inner-section').append('<p>No Data Found....!!!</p>');
    
    }
       
//      Get Sort Cookies
       
//        console.log(Cookies.get('Prosorting'));
       
       var save_sort = Cookies.get('Prosorting'); 
       var get_sort_value = save_sort.split("&sort=");
       console.log('Saved Sort: '+save_sort+' Sort String: '+get_sort_value[1]);
//        console.log(paged_products.split("&skip=")[0]+'&skip='+paged_products.split("&skip=")[1]+'&sort='+get_sort_value[1]);
       var sort_new_url = paged_products.split("&skip=")[0]+'&skip='+paged_products.split("&skip=")[1]+'&sort='+get_sort_value[1];
       console.log(sort_new_url);
       var sort_change_val =  $('.search_model_number #sort-by:has(option:contains("https://svc-2-usf.hotyon.com/search?q=Refrigerator&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip=20&take=10&sort=-date"))').val();
//         console.log("Sort value on page click: "+sort_change_val);
         $('.search_model_number #sort-by').val(sort_new_url).trigger('change');
       setTimeout(function(){
//          //code goes here
//          Cookies.set('Prosorting',save_sort);
//         var sort_change_val =  $('.search_model_number #sort-by:has(option:contains('+sort_new_url+'))').val();
//         console.log("Sort value on page click: "+sort_change_val);
     
       
//          $(".search_model_number #sort-by option").val(sort_change_val).change();

       }, 1500); 
 
       
      
       
   });


$(document).on('click','.search_pagination .pagination-next',function(event){ 
  console.log('next page');
  $(".pagination__item--current")
  .closest('li').next('li').find('a').trigger("click");
  var current =   $(".pagination__item--current")
  .closest('li').next('li').find('a');
   
       var liprev1 = $(current).closest('li').prev('li').prev('li').prev('li').prev('li');
        var liprev2 = $(current).closest('li').prev('li').prev('li').prev('li');
       
         var li1 = $(current).closest('li');
        var li2 = $(current).closest('li').next('li');
          li1.show();
          li2.show();
           liprev1.hide();
           liprev2.show();
  
  
  
      if ($('.search_pagination li:nth-child(2) a').hasClass("pagination__item--current")) {
//         alert('test');
//          $('.search_pagination li:nth-child(1)').hide();
      }
      else{
//         alert('prev child present');
        $('.search_pagination li:nth-child(1)').show();
      }
   $('.pagination__item--current').parent().show();
//   $('.search_pagination li:nth-child(2)').hide();
  
});

$(document).on('click','.search_pagination .pagination-prev',function(event){ 
  console.log('prev page');
 
  $(".pagination__item--current")
  .closest('li').prev('li').find('a').trigger("click");
  var current = $(".pagination__item--current")
  .closest('li').prev('li').find('a');
  
     var lists = $('.search_pagination a');
  //index to start hiding your elements from
  
  var indexTostartHide = parseInt($('.pagination__item--current').parent().prop('className'));
  
  console.log(indexTostartHide);
  
  if (indexTostartHide==1){
  console.log('1 page left');
 
  }
  else {
  for(var i = indexTostartHide; i<lists.length; i++){
    lists.eq(i).parent().hide();
  }
  }
         var liprev1 = $(current).closest('li');
        var liprev2 = $(current).closest('li').prev('li');
       
         var li1 = $(current).closest('li').next('li').next('li').next('li');
        var li2 = $(current).closest('li').next('li').next('li');
          li1.show();
          li2.show();
           liprev1.show();
           liprev2.show();
  
  current.show();
  
  
});

//    Paginate 
    
    
    
//     End pagination
    


// Sort By


    $('.search_model_number #sort-by').on('change', function() {
     var sort_set = $(".search_model_number #sort-by option:selected").text();
      var sort_set_value = sort_set.replaceAll('%20', ' ');
      console.log(sort_set_value);
     
      
      
     var sort_url =  $(this).val();
      console.log('Sort Change url: '+sort_url);
      
      Cookies.set('Prosorting',sort_url);
      
      
        var task_names3 = [];
      
      if(search_query) {
    $.ajax({
     type: 'GET',
//      url: 'https://svc-2-usf.hotyon.com/search?q='+search_value+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6',
     url : sort_url, 
     dataType: 'json',
     success: function(data) { 
     
        console.log(data);
           $('.search-fridge-mainn .inner-section').empty();
       
//        Ajax pagination urls 
         $.each(data, function(i, item) {
                console.log(item.total);
          var total_item = item.total;
          
//           for (var i = 0; i < item.total; i += 40) {
//             //        console.log('Value of i: https://svc-2-usf.hotyon.com/search?q=&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip='+i+'&take=200');
//             var api_url = 'https://svc-2-usf.hotyon.com/search?q1='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip='+i+'&take=40';
//             ajax_urls.push(api_url);
//           }
           
          if (item.items) {
            item.items.forEach(brands => {
             var items_array = brands;
//               console.log(brands);
                task_names3.push(brands); 
            

            });
          }
        });
       

       
       Number.prototype.countDecimals = function () {

         if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

         var str = this.toString();
         if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
           return str.split("-")[1] || 0;
         } else if (str.indexOf(".") !== -1) {
           return str.split(".")[1].length || 0;
         }
         return str.split("-")[1] || 0;
       }


       
             console.log(task_names3.length);
       
                for (var i = 0; i < task_names3.length; i++) { 

                    var filtered_array = task_names3[i];
                    
                   
                   var var_price ="&nbsp;";
                  var var_price_cent ="&nbsp;";
                   var var_inventory ="&nbsp;";
                  
                   var var_id ="&nbsp;";
                  
                  var part_type = [];
                  
                  $.each(task_names3[i].options, function(key,value) {
                         
                   
                    $(task_names2[i].options[key].values).each(function(index, val) {
                  var  option_name = task_names2[i].options[key].values[index];
                  var  option_index = index;
                       
                     
                      
                       if (option_name.includes("Retail"))
                       {
//                            console.log('Opt Name : '+option_index+':'+option_name);
                         
                        
                           var_price_cent = task_names2[i].variants[option_index].price.countDecimals();
                         
//                           console.log('Decimals: '+var_price_cent);
                         
                         if(var_price_cent==1) {
                           //                             alert('1 cents');
                           var_price = '$'+task_names2[i].variants[option_index].price+'0';
                         }
                         else if(var_price_cent<1) {
                           //                          alert('0 cents');
                           var_price = '$'+task_names2[i].variants[option_index].price+'.00';
                         }
                         
                        
                         
                        
                         var_inventory = task_names2[i].variants[option_index].available;
                         
                         if (var_inventory>0)
                         {
                         var_inventory = 'ADD TO CART';
                         }
                         else{
                         var_inventory = 'Sold out';
                         }
//                            console.log('Price var: '+var_price);
                            var_id = task_names2[i].variants[option_index].id;
//                              console.log('var id: '+var_id);
                       }
                            
                            });
                  });
                  
                    
                  

                  var val_meta_col ="&nbsp;";
                  var val_meta_col1 ="&nbsp;";
                  var val_meta_col2 ="&nbsp;";
                   var val_meta_col3 =" ";
                  
                 $.each(task_names3[i].metafields, function(key,value) {
                     var metafield_key = task_names3[i].metafields[key].key;
                     var metafield_value = task_names3[i].metafields[key].value;
                     if (metafield_key == 'collections' ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col =  metafield_value;
//                        console.log(val_meta_col);
                     }
                   
                   if (metafield_key == "specification" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col1 =  metafield_value;
//                        console.log(val_meta_col1);
                     }
                    if (metafield_key == "stock_status" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col2 =  metafield_value;
//                        console.log(val_meta_col2);
                     }
                    if (metafield_key == "part_type" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col3 =  metafield_value;
//                        console.log(val_meta_col3);
                      var option1 = "<option value='"+val_meta_col3+"'>"+val_meta_col3+"</option>"; 
                      
                  $('.sort-right-results .sort-by').append(option1);
                      
                     }
                   
                  });
              
                  
         
                  
                  var image_url ="https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_149x.gif";
                  
                    $.each(task_names3[i].images, function(key,value) {
                          image_url = task_names3[i].images[0].url;
                    });
                  
//                   console.log("Image url : "+image_url);
                  
//                   console.log('collections meta : '+val_meta_col);
                  
                  
                    $('.search-fridge-mainn .inner-section').append('<span class="semi-inner  '+val_meta_col3+'" ><div class="left-image">'+
                     '<img src="'+image_url+'" class="usf-img">'+
                  '</div>'+
                 '<div class="right-desc"><h3>'+task_names3[i].title + '</h3><ul>'+
             '<li><b>Description:</b>'+val_meta_col+'</li>'+
            '<li><b>Specifications:</b> '+val_meta_col1+'</li>'+
            '<li><b>Availability:</b>'+val_meta_col2+'</li>'+
            '</ul>'+
            '<h3>'+var_price+'</h3>'+                                   
             '<div class="shop-button">'+
            '<a href="/products/'+task_names3[i].urlName+'">VIEW</a>'+
            '<a class="add-to-cart-col   AH59-10008C_Retail '+var_inventory+'" data-val="'+var_id+'" href="#">'+var_inventory+'</a>'+
          '</div></div></span>');
                      
                     
                }
       
       
             $('.filter-loading').fadeOut();
       
     }
     
      });
    }
      
      
    });
      
//       End Sorting
    

// Filter by part type


    $('.search_model_number #part_type_options').on('change', function() {
     var sort_url =  $(this).val();
      console.log(sort_url);
      var part_sortaz = sort_url+'&sort=title';
      var part_sort = sort_url+'&sort=-title';
      
      var part_sorton = sort_url+'&sort=date';
      var part_sortno = sort_url+'&sort=-date';
       var part_sortplh = sort_url+'&sort=price';
       var part_sortphl = sort_url+'&sort=-price';
      
       $('.search_model_number #sort-by').html('<option value='+sort_url+'>Relevance</option><option value='+part_sortaz+'>Title: A-Z</option><option value='+part_sort+'>Title: Z-A</option><option value='+part_sorton+'>Date: Old to New</option><option value='+part_sortno+'>Date: New to Old</option><option value='+part_sortplh+'>Price: Low to High</option><option value='+part_sortphl+'>Price: High to Low</option>');
      
      
      $('.search_pagination').hide();
      
        var task_names3 = [];
      
      if(search_query) {
    $.ajax({
     type: 'GET',
//      url: 'https://svc-2-usf.hotyon.com/search?q='+search_value+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6',
     url : sort_url, 
     dataType: 'json',
     success: function(data) { 
     
        console.log(data);
           $('.search-fridge-mainn .inner-section').empty();
       
//        Ajax pagination urls 
         $.each(data, function(i, item) {
                console.log(item.total);
          var total_item = item.total;
          
//           for (var i = 0; i < item.total; i += 40) {
//             //        console.log('Value of i: https://svc-2-usf.hotyon.com/search?q=&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip='+i+'&take=200');
//             var api_url = 'https://svc-2-usf.hotyon.com/search?q1='+search_query+'&apiKey=edfccae2-10ea-4e44-a28e-d868fe41cba6&skip='+i+'&take=40';
//             ajax_urls.push(api_url);
//           }
           
          if (item.items) {
            item.items.forEach(brands => {
             var items_array = brands;
//               console.log(brands);
                task_names3.push(brands); 
            

            });
          }
        });
       

       
       Number.prototype.countDecimals = function () {

         if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

         var str = this.toString();
         if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
           return str.split("-")[1] || 0;
         } else if (str.indexOf(".") !== -1) {
           return str.split(".")[1].length || 0;
         }
         return str.split("-")[1] || 0;
       }


       
             console.log(task_names3.length);
       
                for (var i = 0; i < task_names3.length; i++) { 

                    var filtered_array = task_names3[i];
                    
                   
                   var var_price ="&nbsp;";
                  var var_price_cent ="&nbsp;";
                   var var_inventory ="&nbsp;";
                  
                   var var_id ="&nbsp;";
                  
                  var part_type = [];
                  
                  $.each(task_names3[i].options, function(key,value) {
                         
                   
                    $(task_names2[i].options[key].values).each(function(index, val) {
                  var  option_name = task_names2[i].options[key].values[index];
                  var  option_index = index;
                       
                     
                      
                       if (option_name.includes("Retail"))
                       {
//                            console.log('Opt Name : '+option_index+':'+option_name);
                         
                        
                           var_price_cent = task_names2[i].variants[option_index].price.countDecimals();
                         
//                           console.log('Decimals: '+var_price_cent);
                         
                         if(var_price_cent==1) {
                           //                             alert('1 cents');
                           var_price = '$'+task_names2[i].variants[option_index].price+'0';
                         }
                         else if(var_price_cent<1) {
                           //                          alert('0 cents');
                           var_price = '$'+task_names2[i].variants[option_index].price+'.00';
                         }
                         
                        
                         
                        
                         var_inventory = task_names2[i].variants[option_index].available;
                         
                         if (var_inventory>0)
                         {
                         var_inventory = 'ADD TO CART';
                         }
                         else{
                         var_inventory = 'Sold out';
                         }
//                            console.log('Price var: '+var_price);
                            var_id = task_names2[i].variants[option_index].id;
//                              console.log('var id: '+var_id);
                       }
                            
                            });
                  });
                  
                    
                  

                  var val_meta_col ="&nbsp;";
                  var val_meta_col1 ="&nbsp;";
                  var val_meta_col2 ="&nbsp;";
                   var val_meta_col3 =" ";
                  
                 $.each(task_names3[i].metafields, function(key,value) {
                     var metafield_key = task_names3[i].metafields[key].key;
                     var metafield_value = task_names3[i].metafields[key].value;
                     if (metafield_key == 'collections' ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col =  metafield_value;
//                        console.log(val_meta_col);
                     }
                   
                   if (metafield_key == "specification" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col1 =  metafield_value;
//                        console.log(val_meta_col1);
                     }
                    if (metafield_key == "stock_status" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col2 =  metafield_value;
//                        console.log(val_meta_col2);
                     }
                    if (metafield_key == "part_type" ){
//                        console.log(metafield_key+':'+metafield_value);
                      val_meta_col3 =  metafield_value;
//                        console.log(val_meta_col3);
                      var option1 = "<option value='"+val_meta_col3+"'>"+val_meta_col3+"</option>"; 
                      
                  $('.sort-right-results .sort-by').append(option1);
                      
                     }
                   
                  });
              
                  
         
                  
                  var image_url ="https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_149x.gif";
                  
                    $.each(task_names3[i].images, function(key,value) {
                          image_url = task_names3[i].images[0].url;
                    });
                  
//                   console.log("Image url : "+image_url);
                  
//                   console.log('collections meta : '+val_meta_col);
                  
                  
                    $('.search-fridge-mainn .inner-section').append('<span class="semi-inner  '+val_meta_col3+'" ><div class="left-image">'+
                     '<img src="'+image_url+'" class="usf-img">'+
                  '</div>'+
                 '<div class="right-desc"><h3>'+task_names3[i].title + '</h3><ul>'+
             '<li><b>Description:</b>'+val_meta_col+'</li>'+
            '<li><b>Specifications:</b> '+val_meta_col1+'</li>'+
            '<li><b>Availability:</b>'+val_meta_col2+'</li>'+
            '</ul>'+
            '<h3>'+var_price+'</h3>'+                                   
             '<div class="shop-button">'+
            '<a href="/products/'+task_names3[i].urlName+'">VIEW</a>'+
            '<a class="add-to-cart-col   AH59-10008C_Retail '+var_inventory+'" data-val="'+var_id+'" href="#">'+var_inventory+'</a>'+
          '</div></div></span>');
                      
                     
                }
       
       
       $('.filter-loading').fadeOut();
       $('.search_pagination').fadeIn();

     }
     
      });
    }
      
      
    });
      
//       End filter part type


            setInterval(function () {

      var usedNames = {}; 
      $(".sort-right-results .sort-by > option").each(function () {
        if(usedNames[this.text]) {
          $(this).remove();
        } else {
          usedNames[this.text] = this.value;
        }
      });   
       var seen = {};
       $('.filtered-data').each(function() {
         var txt = $(this).text();
         if (seen[txt])
           $(this).remove();
         else
           seen[txt] = true;
       });
    $('select option[value="null"]').remove();
      
    }, 50);  
    
    
    

      
 



//     Add to cart search page
 
     $(document).on('click','.add-to-cart-col',function(event){ 
var ID = $(this).attr('data-val'); 
  console.log('product id: '+ID);
       event.preventDefault();
  var qty = 1;     
       
$.ajax({
type: 'POST',
url: '/cart/add.js',
data: {
  quantity: qty,
  id: ID
},
  dataType: 'json', 
 success: function (data) { 
    jQuery.getJSON('/cart.js', function(cart) {
  $('#CartCount span:first').text(cart.item_count);
      
    });
 window.location.replace("/cart");
   
   
 },
  error : function (error) { 
     console.error('Error:', error);
    alert(error.responseJSON.description);
   
 }
 }); 
}) 
    
//    End Add to cart
     
     
//  Load more search results 
     
//   $("#seeMore").click(function(e){
//     e.preventDefault();
//     $(".semi-inner:hidden").slice(0,5).css("display", "flex").hide().fadeIn();
    
//     if($(".semi-inner:hidden").length == 0){
//        $("#seeMore").fadeOut("slow");
//       }
//   });

// Loadmore ends here


// Search with search field data only

        
 
    $('#search-page-with-data').on('change input keyup ', function() {
          var input = document.getElementById("search-page-with-data").value.toUpperCase();
      console.log('custom search val: '+input);
       $('#cate-col-data .usf-is__list .nodata').html(' ');
      if (input == ''){
      console.log('Empty input value'+input);
         $('#cate-col-data').hide();
      }
      else {
//       console.log( $('#select-product').val());
//          return false;
      var cate_value =  $('#select-category').val();
      var collection_val = $('#select-product').val();
      console.log('category Val: '+cate_value);
      console.log('collection value: '+collection_val);
//    var task_names2 = [];
      
      console.log(task_names2);
      

        
           console.log(input);
           $('#cate-col-data .usf-is__list').empty();
          
       
       
       
                for (var i = 0; i < task_names2.length; i++) { 
                  console.log(input);
//                     console.log(task_names2[i].title);
                  if(input){
                  if(task_names2[i].title.includes(input)){ 
                    $('#cate-col-data').show();
                    setTimeout(function(){
                     $('#cate-col-data .nodata').hide();
                        }, 5); 
//                    alert('Matched');
                    console.log(task_names2[i]);
                    var filtered_array = task_names2[i];
                    
                   
                    var var_price ="test";
                  
                   var var_id ="test";
                  
                  $.each(task_names2[i].options, function(key,value) {
                         
                   
                    $(task_names2[i].options[key].values).each(function(index, val) {
                  var  option_name = task_names2[i].options[key].values[index];
                  var  option_index = index;
                       
                     
                      
                       if (option_name.includes("Retail"))
                       {
//                            console.log('Opt Name : '+option_index+':'+option_name);
                         
                        
                           var_price = task_names2[i].variants[option_index].price;

                           console.log('Price var: '+var_price);
                            var_id = task_names2[i].variants[option_index].id;
//                              console.log('var id: '+var_id);
                       }
                            
                            });
                  });
                    
                    var image_url ="https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_149x.gif";
                  
                    $.each(task_names2[i].images, function(key,value) {
                          image_url = task_names2[i].images[0].url;
                    });
                      
                    
                      $('#cate-col-data .usf-is__list').append('<span class="usf-is__product usf-clear"><div class="usf-img-wrapper usf-pull-left"><img src="'+image_url+'" class="usf-img"></div><div class="usf-pull-left"><div class="usf-title"><a href='+'/products/'+task_names2[i].urlName+'>'+task_names2[i].title + '</a></div><div class="usf-price-wrapper"><span class="usf-price">$'+var_price+'</span><!----></div></div></span>');
                    
                  }
//                  else if(task_names2[i].description.includes(input.toUpperCase())){ 

//                     console.log('Matched');
//                     console.log(task_names2[i]);
//                     var filtered_array = task_names2[i];
                    
//                      $('#cate-col-data').append('<div class="filtered-data">Product Title <a href='+'/products/'+task_names2[i].urlName+'>'+task_names2[i].title + '</a> Description ' + task_names2[i].description+'</br></div>');
                  
//                  }
                   if(!task_names2[i].title.includes(input)){
                    console.log('Not Matched');
                     $('#cate-col-data').show();
                      $('#cate-col-data .nodata').show();
                   $('#cate-col-data .nodata').html('No Data Found');
                   
                  }

                  }


                }
             
      }
      
      
          
             });

// Search with data end here

// Filter with parts starts here

   $('.sort-right-results .sort-by').on('change', function() {
     
      var selected_pro =  $('.sort-right-results .sort-by').val().replace(/\s/g, '');
        console.log('Sort part type value: '+selected_pro);
      $(".semi-inner").css('display','none');
     $('.'+selected_pro).css('display', 'flex');
      
      
    });

// Filter with parts Ends here


function redirectsearch(){
  setTimeout(function(){
    var search_term =  window.location.href;
    console.log('search term: '+search_term);

    const search_page_query = search_term.split("&q=");
    var search_query_page =  search_page_query[1];

    if(search_term.includes('?q1=')){

      //        alert('search added to form');
      //         alert(search_query_page);
      window.location.replace('https://samsung-parts-nj.myshopify.com/pages/search-fridge?q1='+search_query_page);
      //code goes here


    }
  }, 500); 

}
 


  $('.search-form').submit(function(event){
    redirectsearch();
    
//     return false;    //<---- Add this line
  
});
  
  
  $("input").on('keyup keydown', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        // Do something 
//         alert('test search dkjn');
      redirectsearch();
    }
});


  setInterval(function(){
            //code goes here
    var search_term =  window.location.href;
    
   const search_page_query = search_term.split("&q=");
    var search_query_page =  search_page_query[1];
    
    if(search_term.includes('&q=')){
        console.log(search_query_page);
      
         window.location.replace('https://samsung-parts-nj.myshopify.com/pages/search-fridge?q1='+search_query_page);
    }
    
      }, 500);  

 }); 



 