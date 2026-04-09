---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.2 Gemeinsam genutzte Verzeichnisse
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.2 - Gemeinsam genutzte Verzeichnisse
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | Endgeräte | SOLLTE | die Zugriffsrechte gemeinsam verwendeter Verzeichnisse |  | einschränken | Konfigurationshistorie | >Konfiguration für Endgeräte SOLLTE die Zugriffsrechte gemeinsam verwendeter Verzeichnisse einschränken.

> [!info]- Guidance
>Relevant sind hierbei sowohl speziell eingerichtete Verzeichnisse für die gemeinsame Bearbeitung von Dateien als auch Verzeichnisse, die vom System für gemeinsame Dateien verwendet werden, z.B. /tmp. Unter Linux kann das Sticky-Bit verwendet werden, um den Zugriff auf die Dateien in diesem Verzeichnis einzuschränken, so dass nur noch der Eigentümer einer Datei (oder der Eigentümer des Verzeichnisses) diese Datei löschen oder umbenennen darf.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ec10cb70-9101-4293-ab4c-92d57f84af77 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | ec10cb70-9101-4293-ab4c-92d57f84af77 |
