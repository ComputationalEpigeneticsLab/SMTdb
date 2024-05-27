path_file='0_files/browseFile/sub_cancer_table';

function example(key){
	document.getElementById("datasets").value=key.split(",")[1];
	dasetsSearch();
}
var xmSelectBac = xmSelect.render({
	el: '#xml_bac',
	direction: 'down',//向上展开
	name: 'xml_bac',//表单的name属性
	size: 'big',//选中的之后显示的字的大小
    theme: {color: '#ff9a18',
    	},//主题颜色
    tips: ' Select a key ',
    style: {
		marginLeft: '0px',
		borderRadius: '1px',
		height: '48px',
		//width:'400px',
		border: '1px solid #ced4da',
	},
	radio: true,
	clickClose: true,
	filterable: true,
	data: [
{name: 'Kingdom', value: 'kingdom'},
{name: 'Phylum', value: 'phylum'},
{name: 'Class', value: 'class'},
{name: 'Order', value: 'order'},
{name: 'Family', value: 'family'},
{name: 'Genus', value: 'genus',selected: true},
{name: 'Species', value: 'species'},
	],
	on: function(data){//监听					                            		
		//arr:  当前多选已选中的数据
		var arr = data.arr;
		var change = data.change;
		//isAdd, 此次操作是新增还是删除
		var isAdd = data.isAdd;
		var value0=arr[0]["value"];
		//自动补全位置
	}
})

function dasetsSearch(){
	var key=document.getElementById("datasets").value;
	var searchType="search_bac";
	key=$.trim(key);
	if(key.length==0){
		alert("INPUT A KEY WROLD FIRST !");
		return false;
	}
	var metagenome = xmSelect.get('#xml_bac', true).getValue('valueStr');
	if(metagenome.length==0){
		alert("SELECT A METAGENOME FIRST !");
		return false;
	}
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
							  area: ['1500px', 'auto'],// 宽高
							  title: '',
							  shade: 0.6, // 遮罩透明度
							  shadeClose: true, // 点击遮罩区域，关闭弹层
							  maxmin: true, // 允许全屏最小化
							  anim: 0, // 0-6 的动画形式，-1 不开启
							  content: $('#layer-package')//锁定到div展示这个div
								  });
					  
				})
				
				var oldTable = $('#browse_sub_table').dataTable();
				oldTable.fnClearTable(); //清空一下table
				oldTable.fnDestroy(); //还原初始化了的dataTable
				browseSubTable_gene("0_files/search_bac.txt",key);
				
			}else{
				alert("NO RESULT !");
				return false;
			}
				}
			}

	var param="key="+key+"&searchType="+searchType+"&metagenome="+metagenome;
	xmlHttp.open("get","MysqlFuzzyMatching.jsp?"+param,true);
	xmlHttp.send();
}



function changeImg(path){
	//path = document.querySelectorAll('[id^=UBERON]');
   for(var celltype of path){
       d3.select(celltype)
           .on('click', function () {
               var celltypeName = (this.id.split('_'));
				tissue_name=celltypeName[1];
				//alert(tissue_name);
				//$('#layer-package').hide();
				layui.use(function(){
					  var layer = layui.layer;
					  var $ = layui.$;
						  layer.open({
							  type: 1, // page 层类型
							  area: ['1450px', 'auto'],// 宽高
							  title: '',
							  shade: 0.6, // 遮罩透明度
							  shadeClose: true, // 点击遮罩区域，关闭弹层
							  maxmin: true, // 允许全屏最小化
							  anim: 0, // 0-6 的动画形式，-1 不开启
							  content: $('#layer-package')//锁定到div展示这个div
								  });
					  
				})
						
				var oldTable = $('#browse_sub_table').dataTable();
				oldTable.fnClearTable(); //清空一下table
				oldTable.fnDestroy(); //还原初始化了的dataTable
				browseSubTable(path_file+"/"+tissue_name+".txt");
           })
          
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



function browseSubTable(path){
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
		"order": [[ 0, 'desc' ]],
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
		{'data':'technology'},
		{'data':'slice',
		"render": function ( data, type, row, meta ) {  
			if(row['slice']=="full"){
				me="All slices";
			}else{
				me=row['slice'];
			}
			return me ;}},
		{'data':'spot_num'},
		{'data':'slice_gene_num'},
		{'data':'marker_cluster_num'},
		{'data':null,
    		"render": function ( data, type, row, meta ) {  
    		return  "<a   target='_blank' href='"+row['paper_http']+"'> <i class='fa-solid fa-link' style='font-size:16px;color:#ff9a18' aria-hidden='true'   ></i> "+row['paper']+"</a> ";
    		}
    		},
		{'data':null,
		"render": function ( data, type, row, meta ) {  
		return "<a target='_blank' href=DatesetDetail.jsp?dataSetID="+row['dataset_slice'].split(",")[0]+"&SliceInfor="+row['slice']+">" +"<i class='fa fa-share' aria-hidden='true' style='font-size:15px;'></i></a>";  
								                    }
		}
		]
		} );  
		} );
}
