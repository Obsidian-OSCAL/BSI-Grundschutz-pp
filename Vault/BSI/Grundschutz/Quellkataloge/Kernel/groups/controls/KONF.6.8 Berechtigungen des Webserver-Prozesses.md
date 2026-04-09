---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.8 Berechtigungen des Webserver-Prozesses
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.8 - Berechtigungen des Webserver-Prozesses
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | Webserver | SOLLTE | die Berechtigungen des Webserver-Prozesses |  | einschränken | Konfigurationshistorie | >Konfiguration für Webserver SOLLTE die Berechtigungen des Webserver-Prozesses einschränken.

> [!info]- Guidance
>Wird der laufende Prozess über das Web kompromittiert, so verhindert eine Einschränkung der Rechte eine weitere Ausbreitung des Angriffs. Relevant sind dabei Zugriffsrechte für Dateisystem und Systemfunktionen. Zweckmäßig ist es hierzu, die Berechtigungen so einzuschränken, dass der Serverdienst a) keinen Zugriff auf Dateien außerhalb des WWW-Wurzelverzeichnisses hat, b) Schreibzugriffe innerhalb des WWW‑Wurzelverzeichnisses nur in explizit autorisierten Unter­verzeichnissen hat, c) keine Programme oder Shell‑Befehle außerhalb der vorgesehenen Interpreter ausführen kann, d) keine privilegierten Berechtigungen besitzt.  Unterverzeichnisse die Schreibrechte benötigen könnten sind etwa /uploads, /cache, /tmp.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 342916fa-e073-4db3-906c-af2563081e6e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 342916fa-e073-4db3-906c-af2563081e6e |
