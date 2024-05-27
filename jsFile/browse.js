//showImg('human_cancer','brower.svg');
function showImg(div,img){
	var svgNode = d3.select("#"+div);
	var path ;
	d3.xml("img/"+img, "image/svg+xml", function (error, xml) {
	    if (error) throw error;
	    var svg_content = xml.documentElement;
	    svgNode.node().appendChild(svg_content); //append svg
	    path = document.querySelectorAll('[id^=UBERON]');//匹配id用的
	   //changeImg(path);


	   for(var celltype of path){
		   
       d3.select(celltype)
           .on('click', function () {
               var celltypeName = (this.id.split('_'));
				cancer=celltypeName[1];
				//alert(tissue_name);
				//$('#layer-package').hide();
				layui.use(function(){
					  var layer = layui.layer;
					  var $ = layui.$;
						  layer.open({
							  type: 1, // page 层类型
							  area: ['1400px', 'auto'],// 宽高
							  title: '',
							  shade: 0.6, // 遮罩透明度
							  shadeClose: true, // 点击遮罩区域，关闭弹层
							  maxmin: true, // 允许全屏最小化
							  anim: 0, // 0-6 的动画形式，-1 不开启
							  content: $('#layer-package')//锁定到div展示这个div
								  });
					  
				})
				
				dasetsSearch(cancer);
           })
		 
          
   }
	  
	   
	});

}

function dasetsSearch(cancer){
	var key=cancer;
	var searchType="search_cancer";
	key=$.trim(key);
	
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			//$("#loading").hide();
			if(jsonobj.error_attention=="no"){
				////
				//$('#layer-package').hide();
				layui.use(function(){
					  var layer = layui.layer;
					  var $ = layui.$;
						  layer.open({
							  type: 1, // page 层类型
							  area: ['1450px', 'auto'],// 宽高
							  title: '',
							  shade: 0.0, // 遮罩透明度
							  //shadeClose: true, // 点击遮罩区域，关闭弹层
							  maxmin: true, // 允许全屏最小化
							  anim: 0, // 0-6 的动画形式，-1 不开启
							  content: $('#layer-package')//锁定到div展示这个div
								  });
					  
				})
				
				
				if ($.fn.dataTable.isDataTable('#browse_sub_table')) {
					$('#browse_sub_table').DataTable().clear().destroy();
				}
				browseSubTable_gene("0_files/search_cancer.txt",key);
				
			}else{
				alert("NO RESULT !");
				return false;
			}
				}
			}

	var param="key="+key+"&searchType="+searchType;
	xmlHttp.open("get","MysqlFuzzyMatching.jsp?"+param,true);
	xmlHttp.send();
}


function imgChange(div){
	if(div=="human_cancer"){
		document.getElementById("human_cancer_fa").style.display="block";
		document.getElementById("Metagenome_img_fa").style.display="none";
		document.getElementById('human_cancer_b').setAttribute("class","btn btn-danger");
		document.getElementById('Metagenome_img_b').setAttribute("class","btn btn-danger button_nosig");
	}else{
		document.getElementById("Metagenome_img_fa").style.display="block";
		document.getElementById("human_cancer_fa").style.display="none";
		document.getElementById('Metagenome_img_b').setAttribute("class","btn btn-danger");
		document.getElementById('human_cancer_b').setAttribute("class","btn btn-danger button_nosig");
	}
}

function browseSubTable_gene(path,gene){
//	var table_inner='<thead ><tr><th>Cancer</th><th>Tissue</th><th>Technology </th><th>Section</th><th>No. of Spot </th><th>No. of Gene</th><th>No. of Marker</th><th>Publication</th><th>Detail</th></tr></thead>';
//	document.getElementById("browse_sub_table").innerHTML=table_inner;
	var path=path;
	$(document).ready(function() {
		$("#browse_sub_table").DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
        "aLengthMenu": [5,10,20],//设置每页显示数据条数的下拉选项
        'iDisplayLength': 5, //每页初始显示5条记录
		"deferRender": true,
		"bProcessing": true, 
		"paginationType": "full_numbers",
		"serverSide": false, 
		"order": [[ 0, 'asc' ]],
		'ajax': path,
		'columns':[
		{'data':'cancer'},
		{'data':null,
							"render": function ( data, type, row, meta ) { 
								var str=row['tissue'];
								return str.length < 15 ?
										str :
										"<span title='" + str + "'>" + str.substr(0, 14) + '&#8230;</span>';
							}},
		{'data':'bac_num'},
		{'data':'spot_num'},
		{'data':'cell_num'},
		{'data':'celltype_num'},

		{'data':null,
    		"render": function ( data, type, row, meta ) {  
    		return  "<a target='_blank' href='"+row['paper_http']+"'> <i class='fa-solid fa-link' style='font-size:16px;color:#ff9a18' aria-hidden='true'   ></i> "+row['publication']+"</a> ";
    		}
    		},
		{'data':null,
		"render": function ( data, type, row, meta ) {  
		return "<a target='_blank' href=SearchDetail.jsp?dataSetID="+row['dataset_id']+"&species="+row['species']+">" +"<i class='fa fa-share' aria-hidden='true' style='font-size:15px;'></i></a>";  
								                    }
		}
		]
		} );  
		} );
}
