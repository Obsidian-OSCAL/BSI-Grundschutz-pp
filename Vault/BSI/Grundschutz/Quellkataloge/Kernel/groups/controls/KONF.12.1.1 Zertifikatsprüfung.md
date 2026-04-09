---
tags: Produktbeschreibung_Phishing
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.1 Zertifikatsprüfung
parent_control: KONF.12.1 Eingabevalidierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.1 - Zertifikatsprüfung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Phishing](tags_Phishing)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Webbrowser | SOLLTE | die automatische Validierung des Zertifikates | einschließlich der vollständigen Zertifikatskette | aktivieren | Konfigurationshistorie | >Konfiguration für Webbrowser SOLLTE die automatische Validierung des Zertifikates einschließlich der vollständigen Zertifikatskette aktivieren.

> [!info]- Guidance
>Zertifikatsprüfung (Certificate Validation) ist eine Funktion, bei der ein Browser das digitale Zertifikat einer Webseite vor dem Verbindungsaufbau verifiziert. Dabei wird sichergestellt, dass das Zertifikat von einer vertrauenswürdigen Zertifizierungsstelle (CA - Certificate Authority) ausgestellt, gültig und nicht abgelaufen oder widerrufen ist. Dabei wird die vollständige Zertifikatskette, einschließlich des Root-Zertifikates verifiziert.  Ist das Zertifikat ungültig, so wird der Aufruf der Seite blockiert. Die korrekte Implementierung dieses Prozesses kann die Vertraulichkeit und Integrität der übertragenen Daten gewährleisten und schützt vor Man-in-the-Middle-Angriffen, bei denen Angreifer versuchen, den Datenverkehr abzufangen. Zur Umsetzung dieser Anforderung können Institutionen die zentrale Konfiguration von Browsern über Gruppenrichtlinien (Group Policies) oder Mobile Device Management (MDM)-Lösungen vornehmen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 0e183da9-8671-492b-ba81-f95ff6d90a26 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 0e183da9-8671-492b-ba81-f95ff6d90a26 |
