import json
from django.http import HttpResponse
from django.shortcuts import render
from .forms import UploadFileForm
from .readfile import check_file, extract_data_from_file

# Create your views here.
def map_view(request, *args, **kwargs):
    json_file = open('blockMapping/JSON/df.json', 'r', encoding='utf-8');
    temp = json.load(json_file);
    json_file.close();
    return render(request, "map_page/map_table.html", {'json_info': json.dumps(temp)});


def upload_file_view(request, *args, **kwargs):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            file_type = check_file(request.FILES['file'].name);
            #file_type == 1: xlsx or xls; == 2: csv; == 0: other
            if(file_type != 0):
                var_a = extract_data_from_file(request.FILES['file'], file_type);
                return render(request, "map_page/map_table.html", {'json_file': json.dumps(var_a)});
                # return render(request, "diseases_page/diseases.html", {});
    else:
        form = UploadFileForm()
        my_context = {
            'form': form,
        }
    return render(request, 'upload_page/upload.html', {'form': form});