import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} A. Mugilan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Crafted with <Heart className="w-4 h-4 text-primary fill-primary" /> by Mugilan
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
