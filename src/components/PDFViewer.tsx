
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Download, Award } from "lucide-react";
import photo from "@/assets/00e36d71-6b21-46d1-86ca-13c3aa6e63f8.png";

interface PDFViewerProps {
  title: string;
  content: string;
  triggerText?: string;
  triggerIcon?: React.ReactNode;
}

const PDFViewer = ({ title, content, triggerText = "View Award", triggerIcon }: PDFViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    // Create a canvas to convert image to PDF
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${title.substring(0, 50)}_Award_Certificate.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      });
    };
    
    img.crossOrigin = 'anonymous';
    img.src = photo;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="sm" 
          variant="outline"
          className="flex items-center gap-2 bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300"
        >
          {triggerIcon || <Award className="w-4 h-4" />}
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-600" />
            Award Certificate
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <Button onClick={handleDownload} size="sm" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Certificate
            </Button>
          </div>
          <div className="border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900 flex items-center justify-center" style={{ height: '70vh' }}>
            <img
              src="/lovable-uploads/00e36d71-6b21-46d1-86ca-13c3aa6e63f8.png"
              alt="Award Certificate"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewer;
