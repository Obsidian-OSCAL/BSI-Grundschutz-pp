---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.4.1 Anbindung an Verzeichnisdienst
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.4.1 - Anbindung an Verzeichnisdienst
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.4 Vertrauenswürdige Basisdienste](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md)
---

> [!info]- Untergeordnete Controls
> [KONF.4.1.1 Weiterleitung von Anmeldeinformationen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.4.1.1%20Weiterleitung%20von%20Anmeldeinformationen.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauenswürdige Basisdienste](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md) *** | IT-Systeme | SOLLTE | die Anbindung an einen Verzeichnisdienst |  | aktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE die Anbindung an einen Verzeichnisdienst aktivieren.

> [!info]- Guidance
>Anbindung meint hier die Authentifizierung und Autorisierungsprüfung von Zugangskonten über einen Verzeichnisdient (häufig auch als Directory Service bezeichnet). Dies ermöglicht die zentrale Verwaltung von Identitäten und deren Berechtigungen. Dies bedeutet, dass Zugriffsrechte für alle angebundenen Systeme zentral verwaltet und bei Bedarf umgehend angepasst werden können, was die Einhaltung des Prinzips der geringsten Rechte (Principle of Least Privilege) unterstützt. Ein häufiger Ansatz zur technischen Umsetzung ist die Verwendung von Protokollen wie LDAP (Lightweight Directory Access Protocol) oder der Einsatz von Single Sign-On (SSO) Lösungen, die eine einmalige Authentifizierung des Nutzers für mehrere Systeme ermöglichen. Institutionen können dabei die Anbindung neuer Systeme durch Automatisierung im Rahmen des Provisioning-Prozesses sicherstellen, um menschliche Fehler zu reduzieren. Beispielsweise könnte ein Standard-Skript bei der Installation eines neuen Servers dessen automatische Anbindung an den Verzeichnisdient veranlassen. In Windows Betriebssystemen erfolgt die Konfiguration des Betriebssystem über entsprechende Gruppenrichtlinien (Group Policy Object) aus dem Active Directory.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 99b370b9-b48c-4f68-b88c-d44ef31f83e0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 99b370b9-b48c-4f68-b88c-d44ef31f83e0 |
