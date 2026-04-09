---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.3 Same-Origin-Policy
parent_control: KONF.12.1 Eingabevalidierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.3 - Same-Origin-Policy
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Webbrowser | SOLLTE | aufgerufene Inhalte anhand der von der Webseite bereitgestellten Same-Origin-Policy |  | einschränken | Konfigurationshistorie | >Konfiguration für Webbrowser SOLLTE aufgerufene Inhalte anhand der von der Webseite bereitgestellten Same-Origin-Policy einschränken.

> [!info]- Guidance
>Die Same-Origin-Policy, oft auch als SOP bekannt, ist ein fundamentaler Sicherheitsmechanismus im Webbrowser, der sicherstellt, dass von einer Quelle (Origin) geladene Skripte oder Dokumente nicht mit Ressourcen einer anderen Quelle interagieren können, wobei eine Quelle durch die Kombination aus Protokoll, Hostname und Port definiert wird. Sinn und Zweck dieser strikten Trennung ist der Schutz vor Datenabfluss und unbefugten Interaktionen zwischen unterschiedlichen Webanwendungen innerhalb derselben Browsersitzung. Ohne diese Isolierung könnte eine schadhafte Webseite beispielsweise vertrauliche Informationen aus einer parallel geöffneten legitimen Anwendung, wie einem Online-Banking-Portal oder internen Firmentool, auslesen und an einen Angreifer senden. Die konsequente Durchsetzung der Same-Origin-Policy durch den Browser kann solche Cross-Site-Scripting-Angriffe (XSS) effektiv unterbinden und somit die Vertraulichkeit und Integrität der vom Nutzer verarbeiteten Daten gewährleisten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | faaaee02-ac74-49a0-af01-4e5659ea1053 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | faaaee02-ac74-49a0-af01-4e5659ea1053 |
