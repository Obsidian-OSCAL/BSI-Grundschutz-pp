---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.4 Subresource Integrity-Prüfung
parent_control: KONF.12.1 Eingabevalidierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.4 - Subresource Integrity-Prüfung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Webbrowser | SOLLTE | aufgerufene Inhalte anhand der von der Webseite bereitgestellten Subresource Integrity-Prüfung |  | einschränken | Konfigurationshistorie | >Konfiguration für Webbrowser SOLLTE aufgerufene Inhalte anhand der von der Webseite bereitgestellten Subresource Integrity-Prüfung einschränken.

> [!info]- Guidance
>Unter Subresource Integrity (SRI), zu Deutsch etwa „Integrität von Unterressourcen“, versteht man einen Sicherheitsmechanismus von Webbrowsern, der sicherstellt, dass die vom Browser geladenen Ressourcen, wie z.B. JavaScript-Dateien oder CSS-Stylesheets, die von einem Drittanbieter (etwa einem Content Delivery Network, CDN) stammen, nicht unerwünscht manipuliert wurden. Technisch geschieht dies dadurch, dass die Webseite beim Einbinden der Ressource einen kryptografischen Hashwert (oder Digest) der erwarteten Datei als Attribut (z.B. integrity="...") mitsendet. Der Webbrowser kann dann nach dem Herunterladen der Ressource diesen Hashwert neu berechnen und mit dem bereitgestellten Wert vergleichen. Dies ist notwendig, da die Institution zwar die eigene Webseite kontrolliert, aber nicht die Server Dritter, von denen oft Bibliotheken geladen werden. Der Sinn und Zweck dieser Vorschrift liegt darin, die Sicherheit der Endnutzer zu erhöhen und Risiken durch manipulierte externe Inhalte zu minimieren. Ohne diese Prüfung könnte eine kompromittierte Drittanbieter-Ressource bösen Code in die Webseite der Institution einschleusen, was zu Vorfällen wie Datendiebstahl oder der Installation von Malware auf den Geräten der Nutzer führen könnte.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 0e525ce3-95e3-4095-83f7-942eb6b09c50 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 0e525ce3-95e3-4095-83f7-942eb6b09c50 |
