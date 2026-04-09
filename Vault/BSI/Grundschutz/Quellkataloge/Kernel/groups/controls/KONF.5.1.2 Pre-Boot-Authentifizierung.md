---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.5.1.2 Pre-Boot-Authentifizierung
parent_control: KONF.5.1 Authentifizierung am System
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.5.1.2 - Pre-Boot-Authentifizierung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.5 Authentifizierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.5%20Authentifizierung.md)
---

** Übergeordnetes Control: ** [KONF.5.1 Authentifizierung am System](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.5.1%20Authentifizierung%20am%20System.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Authentifizierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.5%20Authentifizierung.md) *** | Endgeräte | KANN | den Zugriff vor dem Start des Betriebssystems |  | authentifizieren | Konfigurationshistorie | >Konfiguration für Endgeräte KANN den Zugriff vor dem Start des Betriebssystems authentifizieren.

> [!info]- Guidance
>Diese Authentifizierung vor dem Start, oft als "Pre-Boot Authentication" (PBA) oder "Hardware-based Authentication" bezeichnet, verhindert, dass ein Gerät gestartet wird, bevor sich Nutzende mit Anmeldeinformationen, wie zum Beispiel einem Passwort oder einem biometrischen Merkmal, autorisiert haben. Ohne diese Authentifizierung könnte ein Angreifer versuchen, das Gerät direkt zu booten, die Festplatte zu kopieren oder zu manipulieren, um sensitive Daten zu extrahieren. Eine gängige Methode ist die Verwendung einer Festplattenverschlüsselung (Full Disk Encryption, FDE) mit einer Pre-Boot-Authentifizierung. Eine Institution könnte auch eine Mehr-Faktor-Authentifizierung (MFA) vor dem Start des Betriebssystems einsetzen, beispielsweise indem ein Hardware-Token oder ein biometrischer Scan zusätzlich zum Passwort erforderlich ist, was die Sicherheit weiter erhöht.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 89f6db4b-b55b-4218-aad6-6f5c33a49ee6 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 89f6db4b-b55b-4218-aad6-6f5c33a49ee6 |
